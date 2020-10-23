import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { ExhibitorEntity } from '../auth/exhibitor.entity';

export class createExhibitorsTable1603424284188 implements MigrationInterface {
  constructor(public exhibitorEntity: ExhibitorEntity) {}
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
            length: '11',
          },
          {
            name: 'studentNumebr',
            type: 'varchar',
            isUnique: true,
            length: '10',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '10',
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
