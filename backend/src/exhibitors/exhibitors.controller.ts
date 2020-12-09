import { ExhibitorSerializer } from './../entities/serializer/exhibitor.serializer';
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ExhibitorsService } from './exhibitors.service';

@ApiTags('exhibitors')
@Controller('exhibitors')
export class ExhibitorsController {
  constructor(private exhibitorsService: ExhibitorsService) {}

  @Get()
  @ApiOkResponse({
    description: '一覧取得完了',
    type: [ExhibitorSerializer],
  })
  async getExhibitors(): Promise<ExhibitorSerializer[]> {
    const exhibitors = await this.exhibitorsService.getExhibitors();
    return exhibitors.map(e => e.transformToSerializer());
  }
}
