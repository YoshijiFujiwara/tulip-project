import { Factory, Seeder } from 'typeorm-seeding';
import { getRepository } from 'typeorm';
import { GroupEntity } from '../../entities/group.entity';
import { ExhibitEntity } from '../../entities/exhibit.entity';

export default class CreateExhibits implements Seeder {
  public async run(factory: Factory) {
    const groupRepsository = getRepository(GroupEntity);
    const groups = await groupRepsository.find();

    await Promise.all(
      groups.map(async group => {
        return await factory(ExhibitEntity)({
          groupNum: +group.name.slice(3),
          groupId: group.id,
        }).create();
      }),
    );
  }
}
