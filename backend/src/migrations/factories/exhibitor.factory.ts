import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
import { ExhibitorEntity } from '../../entities/exhibitor';
import { v4 as uuid } from 'uuid';

define(ExhibitorEntity, (faker: typeof Faker) => {
  const exhibitor = new ExhibitorEntity();

  exhibitor.id = uuid();
  exhibitor.studentNumber = getRandomStudentNumber();
  exhibitor.password = 'B19990101';
  exhibitor.name = `${faker.name.lastName} ${faker.name.firstName}`;
  exhibitor.lastLoggedinAt = new Date();

  return exhibitor;
});

function getRandomStudentNumber() {
  const min = 10000;
  const max = 99999;
  const number = Math.random() * (max - min) + min;
  return `ohs${number}`;
}
