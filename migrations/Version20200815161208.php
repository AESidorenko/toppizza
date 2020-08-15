<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200815161208 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE order_items_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE order_items (id INT NOT NULL, order_data_id INT NOT NULL, menu_item_id INT DEFAULT NULL, price_euro NUMERIC(5, 2) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_62809DB0C18F0877 ON order_items (order_data_id)');
        $this->addSql('CREATE INDEX IDX_62809DB09AB44FE0 ON order_items (menu_item_id)');
        $this->addSql('ALTER TABLE order_items ADD CONSTRAINT FK_62809DB0C18F0877 FOREIGN KEY (order_data_id) REFERENCES "order" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE order_items ADD CONSTRAINT FK_62809DB09AB44FE0 FOREIGN KEY (menu_item_id) REFERENCES menu_item (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "order" ADD usd_rate NUMERIC(5, 2) NOT NULL');
        $this->addSql('ALTER TABLE "user" ALTER name DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE order_items_id_seq CASCADE');
        $this->addSql('DROP TABLE order_items');
        $this->addSql('ALTER TABLE "order" DROP usd_rate');
        $this->addSql('ALTER TABLE "user" ALTER name SET DEFAULT \'anonymous\'');
    }
}
