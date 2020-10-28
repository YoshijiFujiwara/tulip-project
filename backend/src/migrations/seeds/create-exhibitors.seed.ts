import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitorEntity } from '../../entities/exhibitor';

export default class CreateExhibitors implements Seeder {
  public async run(factory: Factory) {
    await factory(ExhibitorEntity)().createMany(10);
  }
}
