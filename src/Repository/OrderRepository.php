<?php

namespace App\Repository;

use App\Entity\Order;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }

    public function getMostRecentByIdempotencyKey(string $idempotencyKey): ?Order
    {
        return $this->createQueryBuilder('o')
                    ->andWhere('o.idempotencyKey = :idKey')
                    ->setParameter('idKey', $idempotencyKey)
                    ->orderBy('o.updatedAt', 'ASC')
                    ->setMaxResults(1)
                    ->getQuery()
                    ->getOneOrNullResult();
    }

    /**
     * @param User $user
     * @return Order[] Returns an array of Order objects
     */
    public function findByUser(User $user): array
    {
        return $this->createQueryBuilder('o')
                    ->innerJoin('o.customer', 'u')
                    ->andWhere('u.id = :userId')
                    ->setParameter('userId', $user->getId())
                    ->orderBy('o.updatedAt', 'DESC')
                    ->setMaxResults(10)
                    ->getQuery()
                    ->getResult();
    }
}
