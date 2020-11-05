import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ExhibitsService } from './exhibits.service';

@ApiTags('exhibits')
@Controller('exhibits')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ExhibitsController {
  constructor(private exhibitsService: ExhibitsService) {}

  @Post()
  @ApiOkResponse({
    type: 'string',
    description: '作品登録完了',
  })
  async createExhibits(): Promise<string> {
    return 'hogehoge';
  }
}
