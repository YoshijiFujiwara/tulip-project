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
  exhibit.viewsCount = 10;
  exhibit.goodCount = 10;
  exhibit.demo =
    'https://res.cloudinary.com/db32y726v/video/upload/v1609993587/kgzaddhq4nmtsnrnf1oc.mp4';
  exhibit.modelUrl =
    'https://poly.googleapis.com/downloads/fp/1608558449118091/9C-MLNfxaor/fgIw32pFZy_/model.gltf';
  exhibit.genre = genre;
  exhibit.groupId = groupId;

  return exhibit;
});
