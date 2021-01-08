import { EntityRepository, Repository } from 'typeorm';
import { BoothEntity } from './booth.entity';
import { CreateBoothDto } from '../booths/dto/create-booth.dto';
import { ExhibitEntity } from './exhibit.entity';
import { UpdateBoothDto } from '../booths/dto/update-booth.dto';

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

  async isDuplicatedOtherGroup(positionNumber: number): Promise<boolean> {
    const existedBooth = await this.findOne({
      positionNumber,
    });
    return !!existedBooth;
  }

  async updateBooth(
    { positionNumber }: UpdateBoothDto,
    booth: BoothEntity,
  ): Promise<BoothEntity> {
    booth.positionNumber = positionNumber;
    await booth.save();

    delete booth.exhibit;
    return booth;
  }
}
