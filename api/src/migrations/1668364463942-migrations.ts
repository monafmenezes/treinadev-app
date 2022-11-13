import { MigrationInterface, QueryRunner } from "typeorm"

export class migrations1668364463942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE lessons ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE modules ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
