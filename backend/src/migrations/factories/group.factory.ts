import { define } from 'typeorm-seeding';
import { GroupEntity } from '../../entities/group.entity';
import * as Faker from 'faker/locale/ja';

interface Context {
  id: number;
}

define(GroupEntity, (_: typeof Faker, context: Context) => {
  const { id } = context;

  const group = new GroupEntity();
  group.name = `チーム${id}`;

  return group;
});
