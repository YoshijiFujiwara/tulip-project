import {
  Controller,
  HttpCode,
  Post,
  Headers,
  Query,
  Get,
} from '@nestjs/common';
import { AccessLogService } from './access-log.service';
import {
  ApiHeaders,
  ApiOkResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CountAccessLogDto } from './dto/count-access-log.dto';
import { GetUser } from 'src/auth/get-user-decorator';
import { AdministratorEntity } from '../entities/administrator.entity';
import { AccessLogSerializer } from '../entities/serializer/accessLog.serializer';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';

@ApiTags('access_log')
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

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  // @ApiBearerAuth()
  @ApiOkResponse({
    description: 'アクセスログ集計完了',
  })
  async getAccessLog(): // @GetUser(['admin']) _: AdministratorEntity, // eslint-disable-line @typescript-eslint/no-unused-vars
  Promise<AccessLogSerializer[]> {
    const accessLog = await this.accessLogService.getAccessLog();
    return accessLog.map(access => access.transformToSerializer());
  }
}
