import { define } from 'typeorm-seeding';
import { BoothEntity } from '../../entities/booth.entity';
import { ReqDummyExhibit } from '../seeds/providers/exhibits.seed.provider';

define(BoothEntity, (
  _,
  { booth: dummyBooth, id: exhibitId }: ReqDummyExhibit,
): BoothEntity => {
  const booth = new BoothEntity();
  booth.id = exhibitId;
  booth.positionNumber = dummyBooth.positionNumber;
  booth.exhibitId = exhibitId;

  return booth;
});
