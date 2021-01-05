import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getGroup(groupId: number): Promise<GroupEntity> {
    const group = await this.groupRepository.findOne({
      relations: [
        'exhibit',
        'exhibit.booth',
        'exhibit.presentationImages',
        'exhibitors',
      ],
      where: { id: groupId },
    });
    if (!group) {
      throw new NotFoundException('該当するグループが存在しません。');
    }

    return group;
  }
}
