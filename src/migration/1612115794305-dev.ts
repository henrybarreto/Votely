import {MigrationInterface, QueryRunner} from "typeorm";

export class dev1612115794305 implements MigrationInterface {
    name = 'dev1612115794305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `cidade` (`id` varchar(36) NOT NULL, `nome` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `candidato` (`id` varchar(36) NOT NULL, `nome` varchar(255) NOT NULL, `numero` int NOT NULL, `votos` int NOT NULL DEFAULT '0', `cidadeId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `eleitor` (`id` varchar(36) NOT NULL, `titulo` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `candidato` ADD CONSTRAINT `FK_fd57ce5e54a24d27fe3263477d5` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `candidato` DROP FOREIGN KEY `FK_fd57ce5e54a24d27fe3263477d5`");
        await queryRunner.query("DROP TABLE `eleitor`");
        await queryRunner.query("DROP TABLE `candidato`");
        await queryRunner.query("DROP TABLE `cidade`");
    }

}
