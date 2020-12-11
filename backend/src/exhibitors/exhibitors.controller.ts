import { ExhibitorSerializer } from './../entities/serializer/exhibitor.serializer';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ExhibitorsService } from './exhibitors.service';
import { GetUser } from '../auth/get-user-decorator';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { AuthGuard } from '@nestjs/passport';

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

  @Post('attend')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOkResponse({
    description: '出席完了',
    type: ExhibitorSerializer,
  })
  async attend(
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<ExhibitorSerializer> {
    const updatedExhibitor = await this.exhibitorsService.attend(exhibitor);
    return updatedExhibitor.transformToSerializer();
  }
}
