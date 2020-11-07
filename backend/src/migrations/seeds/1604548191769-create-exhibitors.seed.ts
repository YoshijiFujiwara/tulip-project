import { getRepository } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';
import { GroupEntity } from '../../entities/group.entity';

export default class CreateExhibitors implements Seeder {
  public async run(factory: Factory) {
    const exhibitorRepository = getRepository(ExhibitorEntity);
    const exhibitorMaxCnt = (await exhibitorRepository.count()) + 1;

    const groupRepsository = getRepository(GroupEntity);
    const groupMaxCnt = await groupRepsository.count();

    await Promise.all(
      [...Array(9)].map(async (_: any, id: number) => {
        const insertId = id + exhibitorMaxCnt;
        const groupId = Math.floor(Math.random() * groupMaxCnt) + 1;

        return await factory(ExhibitorEntity)({
          id: insertId,
          groupId,
        }).create();
      }),
    );
  }
}
