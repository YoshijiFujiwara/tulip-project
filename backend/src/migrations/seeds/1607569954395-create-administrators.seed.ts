import { Seeder, Factory } from 'typeorm-seeding';
import { AdministratorEntity } from '../../entities/administrator.entity';
import { getRepository } from 'typeorm';

export default class CreateAdministrators implements Seeder {
  public async run(factroy: Factory) {
    const administratorRepository = getRepository(AdministratorEntity);
    const adminMax = await administratorRepository.count();

    await (async () => {
      for (let insertId = adminMax + 1; insertId <= adminMax + 3; insertId++) {
        await factroy(AdministratorEntity)({
          id: insertId,
        }).create();
      }
      return Promise.resolve();
    })();
  }
}
