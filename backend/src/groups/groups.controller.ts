import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
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

  @Get(':id')
  @ApiOkResponse({
    type: GroupSerializer,
    description: '作品情報を取得',
  })
  @ApiNotFoundResponse({
    description: 'IDに該当するグループ情報が存在しなかった',
  })
  async getGroup(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<GroupSerializer> {
    const group = await this.groupsService.getGroup(id);
    return group.transformToSerializer();
  }
}
