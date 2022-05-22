import {MigrationInterface, QueryRunner} from "typeorm";

export class UserImpl1653210902111 implements MigrationInterface {
    name = 'UserImpl1653210902111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "creationDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastUpdateDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
