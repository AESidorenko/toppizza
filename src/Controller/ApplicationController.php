<?php

namespace App\Controller;

use App\Repository\CartRepository;
use App\Repository\MenuItemRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class ApplicationController extends AbstractController
{
    /**
     * @Route("/", name="application")
     * @param Request                $request
     * @param SessionInterface       $session
     * @param MenuItemRepository     $menuItemRepository
     * @param CartRepository         $cartRepository
     * @param EntityManagerInterface $entityManager
     * @throws \Exception
     * @return Response
     */
    public function index(
        Request $request,
        SessionInterface $session,
        MenuItemRepository $menuItemRepository,
        CartRepository $cartRepository,
        EntityManagerInterface $entityManager
    )
    {
        $user = $this->getUser();

        return $this->render('application/index.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/cart", name="cart")
     * @return Response
     */
    public function cart()
    {
        $user = $this->getUser();

        return $this->render('application/cart.html.twig', [
            'user' => $user
        ]);
    }

    /**
     * @Route("/orders", methods={"GET"}, name="showOrdersHistory")
     * @param OrderRepository $orderRepository
     * @return Response
     */
    public function ordersHistory(OrderRepository $orderRepository)
    {
        $user = $this->getUser();
        if ($user === null) {
            return $this->redirect($this->generateUrl('application'));
        }

        $orderRecords = $orderRepository->findByUser($user);

        $orders = [];
        foreach ($orderRecords as $order) {
            $menuItems = [];
            foreach ($order->getItems() as $orderItem) {
                $menuItems[] = [
                    'thumbnail'   => $orderItem->getMenuItem()->getImageThumbnail(),
                    'title'       => $orderItem->getMenuItem()->getTitle(),
                    'description' => $orderItem->getMenuItem()->getDescription(),
                    'price'       => $orderItem->getPriceEuro(),
                    'count'       => $orderItem->getCount(),
                ];
            }

            $orders[] = [
                'date'  => $order->getUpdatedAt()->format("Y.m.d, H:i:s"),
                'items' => $menuItems
            ];
        }

        return $this->render('application/orders.html.twig', [
            'orders' => $orders,
        ]);
    }
}
