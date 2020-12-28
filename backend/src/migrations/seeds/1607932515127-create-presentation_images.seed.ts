import { Seeder, Factory } from 'typeorm-seeding';
import { getRepository } from 'typeorm';
import { ExhibitEntity } from '../../entities/exhibit.entity';
import { PresentationImageEntity } from '../../entities/presentationImage.entity';

export default class CreatePresentationImages implements Seeder {
  public async run(factroy: Factory) {
    const exhibitRepository = getRepository(ExhibitEntity);
    const maxExhibitCnt = await exhibitRepository.count();

    // 作品1個辺り3件登録
    const counts = [...Array(maxExhibitCnt).keys()].map(i => ++i);
    await Promise.all(
      counts.map(async exhibitId => {
        return [
          await factroy(PresentationImageEntity)({
            page: 1,
            exhibitId,
          }).create(),
          await factroy(PresentationImageEntity)({
            page: 2,
            exhibitId,
          }).create(),
          await factroy(PresentationImageEntity)({
            page: 3,
            exhibitId,
          }).create(),
        ];
      }),
    );
  }
}
