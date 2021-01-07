import { Seeder, Factory } from 'typeorm-seeding';
import { BoothEntity } from '../../entities/booth.entity';
import { dummyExhibits } from './providers/exhibits.seed.provider';

export default class CreateBooths implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyExhibits.map(async exhibit => {
        return await factory(BoothEntity)(exhibit).create();
      }),
    );
  }
}
