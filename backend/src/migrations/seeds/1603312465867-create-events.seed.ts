import { Factory, Seeder } from 'typeorm-seeding';
import { EventEntity } from '../../entities/event.entity';

export default class CreateEvents implements Seeder {
  public async run(factory: Factory) {
    await factory(EventEntity)().create();
  }
}
