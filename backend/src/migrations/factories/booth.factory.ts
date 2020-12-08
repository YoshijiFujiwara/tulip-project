import { define } from 'typeorm-seeding';
import { BoothEntity } from '../../entities/booth.entity';

interface Context {
  groupNum: number;
  exhibitId: number;
}

define(BoothEntity, (_, context: Context): BoothEntity => {
  const { groupNum, exhibitId } = context;

  const booth = new BoothEntity();
  booth.positionNumber = groupNum;
  booth.exhibitId = exhibitId;

  return booth;
});
