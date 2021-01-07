import { define } from 'typeorm-seeding';
import { PresentationImageEntity } from '../../entities/presentationImage.entity';
import * as Faker from 'faker/locale/ja';
import { ReqDummyExhibit } from '../seeds/providers/exhibits.seed.provider';
import { DummyPresentaionImage } from '../seeds/providers/presentationImages.seed.provider';

interface Context {
  dummyPresentationImage: DummyPresentaionImage;
  dummyExhibit: ReqDummyExhibit;
}

define(PresentationImageEntity, (
  _: typeof Faker,
  { dummyPresentationImage, dummyExhibit }: Context,
) => {
  const { url, page } = dummyPresentationImage;
  const presentationImage = new PresentationImageEntity();
  presentationImage.url = url;
  presentationImage.page = page;
  presentationImage.exhibitId = dummyExhibit.id;

  return presentationImage;
});
