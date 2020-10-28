import { getRepository } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';

export default class CreateExhibitors implements Seeder {
  public async run(factory: Factory) {
    const exhibitorRepository = getRepository(ExhibitorEntity);
    const maxCnt = await exhibitorRepository.count();

    await Promise.all(
      [...Array(9)].map(async (_: any, id: number) => {
        const insertId = id + maxCnt;
        return await factory(ExhibitorEntity)({ id: insertId }).create();
      }),
    );
  }
}
