import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { ExhibitEntity } from '../entities/exhibit.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ExhibitRepsitory)
    private exhibitRepository: ExhibitRepsitory,
  ) {}

  async getExhibit(groupId: number): Promise<ExhibitEntity> {
    return await this.exhibitRepository.findOne({
      where: { groupId },
    });
  }
}
