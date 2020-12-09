import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../entities/exhibitor.repository';
import { ExhibitorEntity } from '../entities/exhibitor.entity';

@Injectable()
export class ExhibitorsService {
  constructor(
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
  ) {}

  async getExhibitors(): Promise<ExhibitorEntity[]> {
    return await this.exhibitorRepository.find({
      relations: ['group', 'group.exhibit'],
    });
  }
}
