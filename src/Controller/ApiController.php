<?php

namespace App\Controller;

use App\Entity\MenuItem;
use App\Entity\Order;
use App\Entity\OrderItems;
use App\Entity\User;
use App\Repository\MenuItemRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ApiController
 * @package App\Controller
 */
class ApiController extends AbstractController
{
    /**
     *
     */
    const DELIVERY_PRICE = 2;

    /**
     * @Route("/api/menu", name="getMenuItems")
     * @param MenuItemRepository $menuItemRepository
     * @return Response
     */
    public function getMenuItems(MenuItemRepository $menuItemRepository)
    {
        $user = $this->getUser();

        $menuRecords = $menuItemRepository->getOrderedActualMenu();
        $menuItems   = [];
        /** @var MenuItem $record */
        foreach ($menuRecords as $record) {
            $menuItems[] = [
                'id'          => $record->getId(),
                'title'       => $record->getTitle(),
                'price'       => $record->getPriceEuro(),
                'description' => $record->getDescription(),
                'thumbnail'   => $record->getImageThumbnail()
            ];
        }

        return new JsonResponse($menuItems);
    }

    /**
     * @Route("/api/cart", methods={"POST"}, name="buildCartData")
     * @param Request            $request
     * @param MenuItemRepository $menuItemRepository
     * @return RedirectResponse
     */
    public function buildCartData(Request $request, MenuItemRepository $menuItemRepository): Response
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null || !is_array($data['items']) || empty($data['items'])) {
            return new JsonResponse([
                'items'         => [],
                'deliveryPrice' => 0
            ]);
        }

        $selectedMenuItems = $menuItemRepository->findAllByIds($data['items']);
        $items             = [];
        /** @var MenuItem $menuItem */
        foreach ($selectedMenuItems as $menuItem) {
            $items[] = [
                'id'          => $menuItem->getId(),
                'title'       => $menuItem->getTitle(),
                'description' => $menuItem->getDescription(),
                'thumbnail'   => $menuItem->getImageThumbnail(),
                'active'      => $menuItem->getIsActive(),
                'price'       => $menuItem->getPriceEuro()
            ];
        }

        /** @var User $user */
        $user = $this->getUser();

        return new JsonResponse([
            'clientName'    => $user === null ? '' : $user->getName(),
            'clientAddress' => $user === null ? '' : $user->getAddress(),
            'clientPhone'   => $user === null ? '' : $user->getPhone(),
            'items'         => $items,
            'deliveryPrice' => self::DELIVERY_PRICE //todo: make it configurable
        ]);
    }

    /**
     * @Route("/api/order", methods={"POST"}, name="createOrder")
     * @param Request                $request
     * @param MenuItemRepository     $menuItemRepository
     * @param OrderRepository        $orderRepository
     * @param EntityManagerInterface $entityManager
     * @param LoggerInterface        $logger
     * @return RedirectResponse
     */
    public function createOrder(
        Request $request,
        MenuItemRepository $menuItemRepository,
        OrderRepository $orderRepository,
        EntityManagerInterface $entityManager,
        LoggerInterface $logger
    ): Response
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null || !is_array($data['items']) || empty($data['items'])) {
            $logger->error('Incorrect cart content', [
                'url'            => '/api/order',
                'requestContent' => $request->getContent()
            ]);

            return new JsonResponse([
                'status'  => 'error',
                'message' => 'Incorrect cart content'
            ], Response::HTTP_BAD_REQUEST);
        }

        if (!is_array($data['contacts'])
            || empty($data['contacts']['username'])
            || empty($data['contacts']['address'])
            || empty($data['contacts']['phone'])
        ) {
            $logger->error('Incorrect order contacts content', [
                'contacts' => $data['contacts'] ?? []
            ]);

            return new JsonResponse([
                'status'  => 'error',
                'message' => 'Incorrect cart content'
            ], Response::HTTP_BAD_REQUEST);
        }

        $recentOrder = $orderRepository->getMostRecentByIdempotencyKey($data['idempotencyKey']);
        if ($recentOrder !== null && (time() - $recentOrder->getUpdatedAt()->getTimestamp() <= 30)) {
            $logger->warning('Idempotency check failed', [
                'url'            => '/api/order',
                'idempotencyKey' => $data['idempotencyKey'] ?? ""
            ]);

            return new JsonResponse([
                'status'  => 'error',
                'message' => 'Idempotency check failed'
            ], Response::HTTP_PRECONDITION_FAILED);
        }

        $entityManager->beginTransaction();
        try {
            $order =
                (new Order())
                    ->setCustomer($this->getUser())
                    ->setCurrencyUsed($data['currency'] ?? 'EUR')
                    ->setUsdRate($data['usdRate'])
                    ->setCustomerName($data['contacts']['username'])
                    ->setCustomerAddress($data['contacts']['address'])
                    ->setCustomerPhone($data['contacts']['phone'])
                    ->setDeliveryPrice(self::DELIVERY_PRICE) //todo: make configurable
                    ->setUpdatedAt(new \DateTime())
                    ->setPrice($data['totalPrice'])
                    ->setIdempotencyKey($data['idempotencyKey']);;

            foreach ($data['items'] as $item) {
                $menuItem = $menuItemRepository->find($item[0]);
                if ($menuItem === null) {
                    $logger->error('Order item not found', [
                        'itemId'           => $item[0],
                        'customerContacts' => $data['contacts'],
                    ]);
                    throw new \Exception(sprintf("Menu item not found: id=%d", $item[0]));
                }
                $orderItem =
                    (new OrderItems())
                        ->setCount($item[1])
                        ->setPriceEuro($menuItem->getPriceEuro())
                        ->setMenuItem($menuItem)
                        ->setOrderData($order);

                $order->addItem($orderItem);
                $entityManager->persist($orderItem);
            }

            $entityManager->persist($order);
            $entityManager->flush();

            $logger->info('Order created', [
                'orderId'          => $order->getId(),
                'itemsCount'       => $order->getItems()->count(),
                'delvieryPrice'    => $order->getDeliveryPrice(),
                'price'            => $order->getPrice(),
                'currencyUsed'     => $order->getCurrencyUsed(),
                'customerContacts' => $data['contacts'],
            ]);

            $entityManager->commit();
        } catch (\Exception $e) {
            $entityManager->rollback();

            $logger->warning('Saving to database failed', [
                'url'       => '/api/order',
                'exception' => $e->getMessage()
            ]);

            return new JsonResponse([
                'status'  => 'error',
                'message' => 'Saving to database failed'
            ], Response::HTTP_CONFLICT);
        }

        return new JsonResponse([
            'status' => 'ok'
        ]);
    }
}
