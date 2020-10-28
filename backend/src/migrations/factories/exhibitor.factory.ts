import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';
import { v4 as uuid } from 'uuid';
import { randomJapaneseFullName } from '../../func/random.func';

interface Context {
  id: number;
}

define(ExhibitorEntity, (_: typeof Faker, context: Context) => {
  const { id } = context;

  const exhibitor = new ExhibitorEntity();
  exhibitor.id = uuid();
  exhibitor.studentNumber = `ohs7${('0000' + id).slice(-4)}`;
  exhibitor.password = 'B19990101';

  exhibitor.name = `${randomJapaneseFullName()}`;
  exhibitor.lastLoggedinAt = new Date();

  return exhibitor;
});
