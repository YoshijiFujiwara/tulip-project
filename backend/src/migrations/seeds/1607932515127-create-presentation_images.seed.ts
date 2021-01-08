import { Seeder, Factory } from 'typeorm-seeding';
import { PresentationImageEntity } from '../../entities/presentationImage.entity';
import { dummyExhibits } from './providers/exhibits.seed.provider';

export default class CreatePresentationImages implements Seeder {
  public async run(factory: Factory) {
    await Promise.all(
      dummyExhibits.map(
        async dummyExhibit =>
          await Promise.all(
            dummyExhibit.presentationImages.map(
              async dummyPresentationImage =>
                await factory(PresentationImageEntity)({
                  dummyExhibit,
                  dummyPresentationImage,
                }).create(),
            ),
          ),
      ),
    );
  }
}
