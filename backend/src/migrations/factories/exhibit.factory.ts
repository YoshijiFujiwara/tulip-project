import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
import { ExhibitEntity, GENRE } from '../../entities/exhibit.entity';

interface Context {
  groupNum: number;
  groupId: number;
}

define(ExhibitEntity, (_: typeof Faker, context: Context) => {
  const { groupNum, groupId } = context;
  const genres: GENRE[] = Object.keys(GENRE).map(k => GENRE[k]);
  const genre = genres[groupNum % genres.length];

  const exhibit = new ExhibitEntity();
  exhibit.title = `作品${groupNum}`;
  exhibit.description = 'hogehoge';
  exhibit.thumbnail =
    'https://res.cloudinary.com/db32y726v/image/upload/v1596079557/vjzwcimeqkmtwj6fugbj.jpg';
  exhibit.presentationImage =
    'https://res.cloudinary.com/db32y726v/image/upload/v1596079557/vjzwcimeqkmtwj6fugbj.jpg';
  exhibit.demo =
    'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
  exhibit.genre = genre;
  exhibit.groupId = groupId;

  return exhibit;
});
