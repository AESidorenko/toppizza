<?php

namespace App\Entity;

use App\Repository\OrderItemsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderItemsRepository::class)
 */
class OrderItems
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Order::class, inversedBy="items")
     * @ORM\JoinColumn(nullable=false)
     */
    private $orderData;

    /**
     * @ORM\ManyToOne(targetEntity=MenuItem::class)
     */
    private $menuItem;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2)
     */
    private $priceEuro;

    /**
     * @ORM\Column(type="integer")
     */
    private $count;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderData(): ?Order
    {
        return $this->orderData;
    }

    public function setOrderData(?Order $orderData): self
    {
        $this->orderData = $orderData;

        return $this;
    }

    public function getMenuItem(): ?MenuItem
    {
        return $this->menuItem;
    }

    public function setMenuItem(?MenuItem $menuItem): self
    {
        $this->menuItem = $menuItem;

        return $this;
    }

    public function getPriceEuro(): ?string
    {
        return $this->priceEuro;
    }

    public function setPriceEuro(string $priceEuro): self
    {
        $this->priceEuro = $priceEuro;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): self
    {
        $this->count = $count;

        return $this;
    }
}
