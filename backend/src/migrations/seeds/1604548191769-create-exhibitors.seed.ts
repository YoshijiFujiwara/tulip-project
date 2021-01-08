import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';
import { dummyExhibitors } from './providers/exhibitors.seed.provider';

export default class CreateExhibitors implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyExhibitors.map(
        async dummyExhibitor =>
          await factory(ExhibitorEntity)(dummyExhibitor).create(),
      ),
    );
  }
}
