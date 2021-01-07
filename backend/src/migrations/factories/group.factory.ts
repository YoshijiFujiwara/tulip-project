import { define } from 'typeorm-seeding';
import { GroupEntity } from '../../entities/group.entity';
import { DummyGroup } from '../seeds/providers/groups.seed.provider';

define(GroupEntity, (_, dummyGroup: DummyGroup) => {
  const group = new GroupEntity();
  group.name = dummyGroup.name;

  return group;
});
