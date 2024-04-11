import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1712862991790 implements MigrationInterface {
    name = 'CriaTabelas1712862991790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` varchar(36) NOT NULL, \`access_name\` varchar(100) NOT NULL, \`email\` varchar(70) NOT NULL, \`senha\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`usuarios\``);
    }

}
