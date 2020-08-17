#!/bin/bash

php bin/console doctrine:schema:update --force
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load

yarn install
yarn encore dev
