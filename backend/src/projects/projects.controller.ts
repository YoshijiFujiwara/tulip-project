import { Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';

@ApiTags('projects')
@Controller('projects')
// @UseGuards(AuthGuard('jwt'))
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Post()
  @ApiCreatedResponse({
    type: 'string',
    description: '作品登録完了',
  })
  async createProject(): Promise<string> {
    return 'hogehoge';
  }
}
