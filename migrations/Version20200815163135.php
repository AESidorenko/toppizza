<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200815163135 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE cart_menu_item');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE cart_menu_item (cart_id INT NOT NULL, menu_item_id INT NOT NULL, PRIMARY KEY(cart_id, menu_item_id))');
        $this->addSql('CREATE INDEX idx_daaf2cf9ab44fe0 ON cart_menu_item (menu_item_id)');
        $this->addSql('CREATE INDEX idx_daaf2cf1ad5cdbf ON cart_menu_item (cart_id)');
        $this->addSql('ALTER TABLE cart_menu_item ADD CONSTRAINT fk_daaf2cf1ad5cdbf FOREIGN KEY (cart_id) REFERENCES cart (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE cart_menu_item ADD CONSTRAINT fk_daaf2cf9ab44fe0 FOREIGN KEY (menu_item_id) REFERENCES menu_item (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
