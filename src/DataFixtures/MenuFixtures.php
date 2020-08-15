<?php

namespace App\DataFixtures;

use App\Entity\MenuItem;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class MenuFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {
            $item = (new MenuItem())
                ->setTitle("Menu item $i")
                ->setDescription("Description for menu item $i")
                ->setIsActive(true)
                ->setPriceEuro(100 + $i)
                ->setImageThumbnail("menu_item_{$i}_thumbnail.jpg")
                ->setImageFullsize("menu_item_{$i}_fullsize.jpg");

            $manager->persist($item);
        }

        $manager->flush();
    }
}
