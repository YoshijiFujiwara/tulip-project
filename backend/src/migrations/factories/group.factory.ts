import { define } from 'typeorm-seeding';
import { GroupEntity } from '../../entities/group.entity';
import { DummyGroup } from '../seeds/providers/groups.seed.provider';

define(GroupEntity, (_, { id, name }: DummyGroup) => {
  const group = new GroupEntity();
  group.id = id;
  group.name = name;

  return group;
});
