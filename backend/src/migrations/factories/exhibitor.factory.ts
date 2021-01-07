import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';
import { DummyExhibitor } from '../seeds/providers/exhibitors.seed.provider';

define(ExhibitorEntity, (
  _: typeof Faker,
  { id, studentNumber, password, name, group }: DummyExhibitor,
) => {
  const exhibitor = new ExhibitorEntity();
  exhibitor.id = id;
  exhibitor.studentNumber = studentNumber;
  exhibitor.password = password;
  exhibitor.name = name;
  exhibitor.groupId = group.id;

  return exhibitor;
});
