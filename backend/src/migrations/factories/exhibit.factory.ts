import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
import { ExhibitEntity, GENRE } from '../../entities/exhibit.entity';

interface Context {
  groupNum: number;
  groupId: number;
}

define(ExhibitEntity, (_: typeof Faker, context: Context) => {
  const { groupNum, groupId } = context;
  const genre = (() => {
    switch (groupNum % 4) {
      case 1:
        return GENRE.IT;
      case 2:
        return GENRE.MOVIE;
      case 3:
        return GENRE.MUSIC;
      default:
        return GENRE.GAME;
    }
  })();

  const exhibit = new ExhibitEntity();
  exhibit.title = `作品${groupNum}`;
  exhibit.description = 'hogehoge';
  exhibit.thumbnail =
    'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg';
  exhibit.presentationImage =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD';
  exhibit.genre = genre;
  exhibit.groupId = groupId;

  return exhibit;
});
