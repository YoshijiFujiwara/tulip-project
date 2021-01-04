import { Factory, Seeder } from 'typeorm-seeding';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';

export default class CreateExhibitors implements Seeder {
  public async run(factory: Factory) {
    await Promise.all([
      await factory(ExhibitorEntity)({
        id: 1,
        groupId: 1,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 2,
        groupId: 1,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 3,
        groupId: 1,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 4,
        groupId: 2,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 5,
        groupId: 2,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 6,
        groupId: 2,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 7,
        groupId: 3,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 8,
        groupId: 3,
      }).create(),
      await factory(ExhibitorEntity)({
        id: 9,
        groupId: 3,
      }).create(),
    ]);
  }
}
