import { EntityRepository, Repository } from 'typeorm';
import { PresentationImageEntity } from './presentationImage.entity';
import { CreateExhibitDto } from '../exhibits/dto/create-exhibit.dto';
import { UpdateExhibitDto } from '../exhibits/dto/update-exhibit.dto';

@EntityRepository(PresentationImageEntity)
export class PresentationImageRepository extends Repository<
  PresentationImageEntity
> {
  async createPresentationImages(
    { presentationImages }: CreateExhibitDto | UpdateExhibitDto,
    exhibitId: number,
  ) {
    return await Promise.all(
      presentationImages.map(async url => {
        const presentationImage = new PresentationImageEntity();
        presentationImage.exhibitId = exhibitId;
        presentationImage.url = url;
        return await presentationImage.save();
      }),
    );
  }
}
