import { Seeder, Factory } from 'typeorm-seeding';
import { getRepository } from 'typeorm';
import { GroupEntity } from '../../entities/group.entity';
import { BoothEntity } from '../../entities/booth.entity';

export default class CreateBooths implements Seeder {
  public async run(factory: Factory) {
    const groupRepository = getRepository(GroupEntity);
    const groups = await groupRepository.find({
      relations: ['exhibit'],
    });

    await Promise.all(
      groups.map(async group => {
        return await factory(BoothEntity)({
          groupNum: +group.name.slice(3),
          exhibitId: group.exhibit.id,
        }).create();
      }),
    );
  }
}
