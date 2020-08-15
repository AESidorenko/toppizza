<?php

namespace App\Entity;

use App\Repository\MenuItemRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MenuItemRepository::class)
 */
class MenuItem
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imageThumbnail;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imageFullsize;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2)
     */
    private $priceEuro;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImageThumbnail(): ?string
    {
        return $this->imageThumbnail;
    }

    public function setImageThumbnail(string $imageThumbnail): self
    {
        $this->imageThumbnail = $imageThumbnail;

        return $this;
    }

    public function getImageFullsize(): ?string
    {
        return $this->imageFullsize;
    }

    public function setImageFullsize(string $imageFullsize): self
    {
        $this->imageFullsize = $imageFullsize;

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

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }
}
