import { Seeder, Factory } from 'typeorm-seeding';
import { provideDummyAccessLog } from './providers/accessLog.seed.provider';
import { AccessLogEntity } from '../../entities/accessLog.entity';

export default class CreateAccessLog implements Seeder {
  public async run(factroy: Factory) {
    const dummyAccessLog = provideDummyAccessLog();

    await Promise.all(
      dummyAccessLog.map(
        async dummyAccess =>
          await factroy(AccessLogEntity)(dummyAccess).create(),
      ),
    );
  }
}
