<?php

namespace App\Controller;

use App\Repository\CartRepository;
use App\Repository\MenuItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class ApplicationController extends AbstractController
{
    const ONE_HOUR = 60 * 60;

    /**
     * @Route("/", name="application")
     * @param Request            $request
     * @param MenuItemRepository $menuItemRepository
     * @param CartRepository     $cartRepository
     * @return Response
     */
    public function index(Request $request, SessionInterface $session, MenuItemRepository $menuItemRepository, CartRepository $cartRepository)
    {
        $user = $this->getUser();

        // if cart from session exists:
        //      - get cart from session
        // else:
        //      - generate new cart-hash
        //      - clear cart

        $cartHash = $session->get('cart-hash', null);
        if (is_null($cartHash)) {
            $session->set('cart-hash', uniqid('cart-', true));
        }

        $response = $this->render('application/index.html.twig', [
            'controller_name' => 'ApplicationController',
            'cookies'         => $request->cookies,
            'cart'            => $cartRecord ?? 'Cart not exists',
            'cartHash'        => $cartHash ?? 'No cart hash',
            'session'         => $session
        ]);

        if (isset($cookie)) {
            $response->headers->setCookie($cookie);
        }

        return $response;
    }

    /**
     * @Route("/cart", name="cart")
     * @return Response
     */
    public function cart()
    {
        return $this->render('application/cart.html.twig', [
        ]);
    }
}
