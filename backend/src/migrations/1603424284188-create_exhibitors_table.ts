import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createExhibitorsTable1603424284188 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exhibitors',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
            length: '36',
          },
          {
            name: 'studentNumber',
            type: 'varchar',
            isUnique: true,
            length: '10',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '25',
          },
          {
            name: 'lastLoggedinAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      new Table({
        name: 'exhibitors',
      }),
    );
  }
}
