<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UsersFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();

        $user
            ->setUsername('user1')
            ->setPassword($this->passwordEncoder->encodePassword($user, 'password'))
            ->setAddress('Baker st, 221b')
            ->setPhone('+1 (123) 456 789')
            ->setRoles([User::ROLE_REGISTERED_CUSTOMER]);

        $manager->persist($user);

        $manager->flush();
    }
}
