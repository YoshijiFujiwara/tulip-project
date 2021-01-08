import {
  Body,
  Controller,
  HttpCode,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { EventsService } from './events.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiTags,
  // ApiBearerAuth,
} from '@nestjs/swagger';
import { EventSerializer } from '../entities/serializer/event.serializer';
// import { GetUser } from '../auth/get-user-decorator';
// import { AdministratorEntity } from '../entities/administrator.entity';
import { UpdateEventDto } from './dto/update-event.dto';
import { Get } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Put()
  @HttpCode(200)
  // TODO: admin権限のフロント制御が出来るまで、一時的にコメントアウトしております！
  // @UseGuards(AuthGuard('jwt'))
  // @ApiBearerAuth()
  @ApiOkResponse({
    type: EventSerializer,
    description: 'イベント更新完了',
  })
  @ApiBadRequestResponse({
    description: '開始日時が終了日時と同じまたは後が入力された',
  })
  async updateEvent(
    @Body(ValidationPipe) updateEventDto: UpdateEventDto,
    // TODO: admin権限のフロント制御が出来るまで、一時的にコメントアウトしております！
    // @GetUser(['admin']) _: AdministratorEntity, // eslint-disable-line @typescript-eslint/no-unused-vars
  ): Promise<EventSerializer> {
    const event = await this.eventsService.updateEvent(updateEventDto);
    return event.transformToSerializer();
  }

  @Get()
  @ApiOkResponse({
    type: EventSerializer,
    description: 'イベント取得完了',
  })
  async getEvent() {
    const event = await this.eventsService.getEvent();
    return event.transformToSerializer();
  }
}
