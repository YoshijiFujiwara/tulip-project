import { EntityRepository, Repository } from 'typeorm';
import { ExhibitEntity } from './exhibit.entity';
import { CreateExhibitDto } from '../exhibits/dto/create-exhibit.dto';
import { GroupEntity } from './group.entity';

@EntityRepository(ExhibitEntity)
export class ExhibitRepsitory extends Repository<ExhibitEntity> {
  async createExhibit(
    {
      title,
      description,
      thumbnail,
      genre,
      presentationImage,
    }: CreateExhibitDto,
    group: GroupEntity,
  ): Promise<ExhibitEntity> {
    const exhibit = new ExhibitEntity();
    exhibit.title = title;
    exhibit.description = description;
    exhibit.thumbnail = thumbnail;
    exhibit.genre = genre;
    exhibit.presentationImage = presentationImage;
    exhibit.group = group;
    await exhibit.save();

    delete exhibit.group;
    return exhibit;
  }
}
