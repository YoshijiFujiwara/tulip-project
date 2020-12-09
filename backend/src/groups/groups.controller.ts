import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GroupsService } from './groups.service';
import { GroupSerializer } from '../entities/serializer/group.serizlier';

@ApiTags('groups')
@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  @ApiOkResponse({
    description: '一覧取得完了',
    type: [GroupSerializer],
  })
  async getGroups(): Promise<GroupSerializer[]> {
    const groups = await this.groupsService.getGroups();
    return groups.map(g => g.transformToSerializer());
  }
}
