import { Factory, Seeder } from 'typeorm-seeding';
import { GroupEntity } from '../../entities/group.entity';
import { dummyGroups } from './providers/groups.seed.provider';

export default class CreateGroups implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyGroups.map(
        async group => await factory(GroupEntity)(group).create(),
      ),
    );
  }
}
