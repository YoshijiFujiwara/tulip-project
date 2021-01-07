import { Seeder, Factory } from 'typeorm-seeding';
import { BoothEntity } from '../../entities/booth.entity';
import { dummyBooths } from './providers/booths.seed.provider';

export default class CreateBooths implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyBooths.map(async booth => {
        return await factory(BoothEntity)(booth).create();
      }),
    );
  }
}
