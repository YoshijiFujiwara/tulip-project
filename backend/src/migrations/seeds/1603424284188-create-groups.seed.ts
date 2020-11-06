import { getRepository } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { GroupEntity } from '../../entities/group.entity';

export default class CreateGroups implements Seeder {
  public async run(factory: Factory) {
    const groupRepsository = getRepository(GroupEntity);
    const maxCnt = (await groupRepsository.count()) + 1;

    await Promise.all(
      [...Array(3)].map(async (_: any, id: number) => {
        const insertId = id + maxCnt;
        return await factory(GroupEntity)({ id: insertId }).create();
      }),
    );
  }
}
