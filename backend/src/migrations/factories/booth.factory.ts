import { define } from 'typeorm-seeding';
import { BoothEntity } from '../../entities/booth.entity';
import { DummyBooth } from '../seeds/providers/booths.seed.provider';

define(BoothEntity, (_, { id, positionNumber }: DummyBooth): BoothEntity => {
  const booth = new BoothEntity();
  booth.id = id;
  booth.positionNumber = positionNumber;
  booth.exhibitId = id;

  return booth;
});
