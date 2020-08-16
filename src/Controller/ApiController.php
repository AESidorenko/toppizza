<?php

namespace App\Controller;

use App\Entity\MenuItem;
use App\Repository\MenuItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
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
}
