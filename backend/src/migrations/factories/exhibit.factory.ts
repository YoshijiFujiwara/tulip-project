import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
import { ExhibitEntity } from '../../entities/exhibit.entity';
import { DummyExhibit } from '../seeds/providers/exhibits.seed.provider';
import { randRange } from '../../func/rand.func';

define(ExhibitEntity, (
  _: typeof Faker,
  { id, title, description, thumbnail, genre, group }: DummyExhibit,
) => {
  const exhibit = new ExhibitEntity();
  exhibit.id = id;
  exhibit.title = title;
  exhibit.description = description;
  exhibit.thumbnail = thumbnail;
  exhibit.viewsCount = randRange();
  exhibit.goodCount = randRange(exhibit.viewsCount);
  exhibit.genre = genre;
  exhibit.groupId = group.id;

  return exhibit;
});
