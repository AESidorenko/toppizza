<?php

namespace App\Controller;

use App\Entity\MenuItem;
use App\Entity\Order;
use App\Entity\OrderItems;
use App\Repository\MenuItemRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
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
                'id'    => $record->getId(),
                'title' => $record->getTitle()
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
            throw new HttpException(Response::HTTP_BAD_REQUEST, "Invalid cart content");
        }

        $selectedMenuItems = $menuItemRepository->findAllByIds($data['items']);
        $items             = [];
        /** @var MenuItem $menuItem */
        foreach ($selectedMenuItems as $menuItem) {
            $items[] = [
                'id'        => $menuItem->getId(),
                'title'     => $menuItem->getTitle(),
                'thumbnail' => $menuItem->getImageThumbnail(),
                'active'    => $menuItem->getIsActive(),
                'price'     => $menuItem->getPriceEuro()
            ];
        }

        return new JsonResponse([
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
     * @throws \Exception
     * @return RedirectResponse
     */
    public function createOrder(
        Request $request,
        MenuItemRepository $menuItemRepository,
        OrderRepository $orderRepository,
        EntityManagerInterface $entityManager
    ): Response
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null || !is_array($data['items']) || empty($data['items'])) {
            throw new HttpException(Response::HTTP_BAD_REQUEST, "Invalid cart content");
        }

        $recentOrder = $orderRepository->getMostRecentByIdempotencyKey($data['idempotencyKey']);
        if ($recentOrder !== null && (time() - $recentOrder->getUpdatedAt()->getTimestamp() <= 30)) {
            return new JsonResponse([
                'status'  => 'error',
                'message' => 'Idempotency check failed'
            ], Response::HTTP_PRECONDITION_FAILED);
        }

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

        $orderItems = [];
        foreach ($data['items'] as $item) {
            $menuItem = $menuItemRepository->find($item[0]);
            if ($menuItem === null) {
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

        return new JsonResponse([
            'status' => 'ok'
        ]);
    }
}
