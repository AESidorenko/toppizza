<?php

namespace App\Controller;

use App\Entity\Cart;
use App\Repository\CartRepository;
use App\Repository\MenuItemRepository;
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
     * @Route("/cart", methods={"GET"}, name="cart")
     * @return Response
     */
    public function cart()
    {
        $user = $this->getUser();

        return $this->render('application/cart.html.twig', [
            'user' => $user
        ]);
    }
}
