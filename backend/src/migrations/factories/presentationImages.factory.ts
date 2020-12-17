import { define } from 'typeorm-seeding';
import { PresentationImageEntity } from '../../entities/presentationImage.entity';
import * as Faker from 'faker/locale/ja';

interface Context {
  exhibitId: number;
}

define(PresentationImageEntity, (_: typeof Faker, { exhibitId }: Context) => {
  const presentationImage = new PresentationImageEntity();
  presentationImage.url =
    'https://res.cloudinary.com/db32y726v/image/upload/v1596079557/vjzwcimeqkmtwj6fugbj.jpg';
  presentationImage.exhibitId = exhibitId;
  return presentationImage;
});
