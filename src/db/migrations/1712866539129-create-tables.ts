import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1712866539129 implements MigrationInterface {
    name = 'CreateTables1712866539129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`contact\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(70) NOT NULL, \`phone\` varchar(70) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`access_name\` varchar(100) NOT NULL, \`senha\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`personId\` int NULL, UNIQUE INDEX \`REL_6aac19005cea8e2119cbe7759e\` (\`personId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`person\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`contactId\` int NULL, UNIQUE INDEX \`REL_b31ac8229e70ca65e9451586b7\` (\`contactId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_6aac19005cea8e2119cbe7759e8\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`person\` ADD CONSTRAINT \`FK_b31ac8229e70ca65e9451586b7a\` FOREIGN KEY (\`contactId\`) REFERENCES \`contact\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`person\` DROP FOREIGN KEY \`FK_b31ac8229e70ca65e9451586b7a\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_6aac19005cea8e2119cbe7759e8\``);
        await queryRunner.query(`DROP INDEX \`REL_b31ac8229e70ca65e9451586b7\` ON \`person\``);
        await queryRunner.query(`DROP TABLE \`person\``);
        await queryRunner.query(`DROP INDEX \`REL_6aac19005cea8e2119cbe7759e\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`contact\``);
    }

}
