import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitEntity } from '../../entities/exhibit.entity';
import { dummyExhibits } from './providers/exhibits.seed.provider';

export default class CreateExhibits implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyExhibits.map(async exhibit => {
        if (exhibit === null) {
          return Promise.resolve();
        }
        return await factory(ExhibitEntity)(exhibit).create();
      }),
    );
  }
}
