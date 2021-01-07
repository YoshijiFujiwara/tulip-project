import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAccessLogTable1610004033359 implements MigrationInterface {
  name = 'CreateAccessLogTable1610004033359';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'access_log',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'url',
            type: 'text',
          },
          {
            name: 'useragent',
            type: 'varchar',
            length: '512',
          },
          {
            name: 'username',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'avatar',
            type: 'varchar',
            length: '50',
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
        name: 'access_log',
      }),
    );
  }
}
