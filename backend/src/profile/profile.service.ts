import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';
import { ExhibitEntity } from '../entities/exhibit.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ExhibitRepsitory)
    private exhibitRepository: ExhibitRepsitory,
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async getExhibit(groupId: number): Promise<ExhibitEntity> {
    const exhibit = await this.exhibitRepository.findOne({
      relations: ['group'],
      where: { id: groupId },
    });
    if (!exhibit) {
      throw new NotFoundException('該当する作品が存在しません');
    }
    return exhibit;
  }
}
