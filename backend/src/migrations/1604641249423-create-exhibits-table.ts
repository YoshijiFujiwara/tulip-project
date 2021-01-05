import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateExhibitsTable1604641249423 implements MigrationInterface {
  name = 'CreateExhibitsTable1604641249423';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exhibits',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'thumbnail',
            type: 'text',
          },
          {
            name: 'viewsCount',
            type: 'integer',
            default: 0,
          },
          {
            name: 'goodCount',
            type: 'integer',
            default: 0,
          },
          {
            name: 'demo',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'modelUrl',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'genre',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'groupId',
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

    const exhibitsForeignKey = new TableForeignKey({
      columnNames: ['groupId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'groups',
      onDelete: 'CASCADE',
    });
    await queryRunner.createForeignKey('exhibits', exhibitsForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      new Table({
        name: 'exhibits',
      }),
    );
  }
}
