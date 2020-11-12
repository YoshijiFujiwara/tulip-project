import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const group = await this.groupRepository.findOne({
      relations: ['exhibit'],
      where: { id: exhibitor.groupId },
    });
    if (group.exhibit) {
      throw new ConflictException('作品は登録済みです');
    }

    return await this.exhibitRepsitory.createExhibit(createExhibitDto, group);
  }

  async getExhibit(id: number): Promise<ExhibitEntity> {
    const exhibit = await this.exhibitRepsitory.findOne({
      relations: ['group'],
      where: { id },
    });
    if (!exhibit) {
      throw new NotFoundException('該当する作品が存在しません。');
    }
    return exhibit;
  }
}
