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
  ): Promise<PresentationImageEntity[]> {
    return await Promise.all(
      presentationImages.map(async (url, page) => {
        const presentationImage = new PresentationImageEntity();
        presentationImage.exhibitId = exhibitId;
        presentationImage.page = page + 1;
        presentationImage.url = url;
        return await presentationImage.save();
      }),
    );
  }
}
