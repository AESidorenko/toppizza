<?php

namespace App\Controller;

use App\Entity\MenuItem;
use App\Repository\CartRepository;
use App\Repository\MenuItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
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
     * @param Request $request
     * @return RedirectResponse
     */
    public function buildCartData(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        if ($data === null) {
            throw new HttpException(Response::HTTP_BAD_REQUEST, "Invalid cart content");
        }

        // create new cart
        // fill the cart by items from $data
        // return cart hash

        $cartId = uniqid();

        return new JsonResponse([
            'status' => 'ok',
            'cartId' => $cartId,
        ]);
    }
}
