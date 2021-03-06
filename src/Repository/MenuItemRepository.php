<?php

namespace App\Repository;

use App\Entity\MenuItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\Connection;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MenuItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method MenuItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method MenuItem[]    findAll()
 * @method MenuItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MenuItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MenuItem::class);
    }

    public function getOrderedActualMenu(): array
    {
        return $this->createQueryBuilder('m')
                    ->Where('m.isActive = TRUE')
                    ->orderBy('m.id')
                    ->getQuery()
                    ->getResult();
    }

    public function findAllByIds($itemIds)
    {
        return $this->createQueryBuilder('m')
                    ->Where('m.id IN(:ids)')
                    ->orderBy('m.priceEuro', 'DESC')
                    ->setParameter('ids', $itemIds, Connection::PARAM_INT_ARRAY)
                    ->getQuery()
                    ->getResult();
    }
}
