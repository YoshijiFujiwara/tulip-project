import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';
import { dummyExhibits } from './providers/exhibits.seed.provider';

export default class CreateExhibitors implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyExhibits.map(async dummyExhibit =>
        dummyExhibit.exhibitors.map(
          async dummyExhibitor =>
            await factory(ExhibitorEntity)(dummyExhibitor).create(),
        ),
      ),
    );
  }
}
