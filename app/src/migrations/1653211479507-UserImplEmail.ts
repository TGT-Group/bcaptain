import {MigrationInterface, QueryRunner} from "typeorm";

export class UserImplEmail1653211479507 implements MigrationInterface {
    name = 'UserImplEmail1653211479507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
