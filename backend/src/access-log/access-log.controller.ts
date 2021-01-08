import { Controller, HttpCode, Post, Headers, Query } from '@nestjs/common';
import { AccessLogService } from './access-log.service';
import { ApiHeaders, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CountAccessLogDto } from './dto/count-access-log.dto';

@ApiTags('access-log')
@Controller('access_log')
export class AccessLogController {
  constructor(private accessLogService: AccessLogService) {}

  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    description: 'アクセスカウント完了',
  })
  @ApiHeaders([
    {
      name: 'user-agent',
      description: 'この入力値は反映されません。',
      schema: {
        default:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
      },
    },
    {
      name: 'referer',
      description: 'この入力値は反映されません。',
      schema: {
        default: 'https://localhost:3001/swagger/',
      },
    },
  ])
  async countUp(
    @Headers('user-agent') useragent: string,
    @Headers('referer') url: string,
    @Query() countAccessLogDto: CountAccessLogDto,
  ): Promise<void> {
    await this.accessLogService.countUp({ useragent, url }, countAccessLogDto);
  }
}
