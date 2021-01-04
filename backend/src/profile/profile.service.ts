import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { ExhibitEntity } from '../entities/exhibit.entity';
import { Injectable } from '@nestjs/common';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { ExhibitorRepository } from '../entities/exhibitor.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ExhibitRepsitory)
    private exhibitRepository: ExhibitRepsitory,
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
  ) {}

  async getExhibit(groupId: number): Promise<ExhibitEntity> {
    return await this.exhibitRepository.findOne({
      relations: ['event'],
      where: { groupId },
    });
  }

  async attend({ id }: ExhibitorEntity): Promise<ExhibitorEntity> {
    const exhibitor = await this.exhibitorRepository.findOne({ id });
    exhibitor.attendedAt = new Date();
    return await exhibitor.save();
  }
}
