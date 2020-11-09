import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GroupRepository } from '../entities/group.repository';
import { ExhibitEntity } from '../entities/exhibit.entity';

@Injectable()
export class ExhibitsService {
  constructor(
    @InjectRepository(ExhibitRepsitory)
    private exhibitRepsitory: ExhibitRepsitory,
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async createExhibit(
    createExhibitDto: CreateExhibitDto,
    exhibitor: ExhibitorEntity,
  ): Promise<ExhibitEntity> {
    const group = await this.groupRepository.findOne({ id: exhibitor.groupId });
    if (!group) {
      throw new ForbiddenException(
        '作品を登録するには、グループに所属する必要があります',
      );
    }

    return await this.exhibitRepsitory.createExhibit(createExhibitDto, group);
  }
}
