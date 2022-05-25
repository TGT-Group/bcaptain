import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertedCodeGeneration1653437004321 implements MigrationInterface {
    name = 'InsertedCodeGeneration1653437004321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "code" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_18cc0d1f925c984c62952b544df" UNIQUE ("code")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_18cc0d1f925c984c62952b544df"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "code" text`);
    }

}
