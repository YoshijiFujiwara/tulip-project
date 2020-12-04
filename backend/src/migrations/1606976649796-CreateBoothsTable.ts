import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateBoothsTable1606976649796 implements MigrationInterface {
  name = 'CreateBoothsTable1606976649796';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'booths',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'positionNumber',
            type: 'integer',
            isUnique: true,
          },
          {
            name: 'exhibitId',
            type: 'integer',
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

    const foreignKey = new TableForeignKey({
      columnNames: ['exhibitId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'exhibits',
      onDelete: 'CASCADE',
    });
    await queryRunner.createForeignKey('booths', foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      new Table({
        name: 'booths',
      }),
    );
  }
}
