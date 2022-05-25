import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertedCode1653436864595 implements MigrationInterface {
    name = 'InsertedCode1653436864595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "code" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "code" character varying NOT NULL DEFAULT 'XXXXXX'`);
    }

}
