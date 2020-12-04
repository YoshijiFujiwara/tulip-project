import { EntityRepository, Repository, Not } from 'typeorm';
import { BoothEntity } from './booth.entity';
import { CreateBoothDto } from '../booths/dto/create-booth.dto';
import { ExhibitEntity } from './exhibit.entity';

@EntityRepository(BoothEntity)
export class BoothRepository extends Repository<BoothEntity> {
  async createBooth(
    { positionNumber }: CreateBoothDto,
    exhibit: ExhibitEntity,
  ): Promise<BoothEntity> {
    const booth = new BoothEntity();
    booth.positionNumber = positionNumber;
    booth.exhibit = exhibit;
    await booth.save();

    delete booth.exhibit;
    return booth;
  }

  async isDuplicatedOtherGroup(
    { positionNumber }: CreateBoothDto,
    { id: exhibitId }: ExhibitEntity,
  ): Promise<boolean> {
    return !!(await this.findOne({
      positionNumber,
      exhibitId: Not(exhibitId),
    }));
  }
}
