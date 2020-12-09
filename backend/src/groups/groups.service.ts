import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupRepository } from '../entities/group.repository';
import { GroupEntity } from '../entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async getGroups(): Promise<GroupEntity[]> {
    return await this.groupRepository.find({
      relations: ['exhibitors', 'exhibit', 'exhibit.booth'],
    });
  }
}
