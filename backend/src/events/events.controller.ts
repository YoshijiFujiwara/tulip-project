import { Controller, HttpCode, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { EventSerializer } from '../entities/serializer/event.serializer';
import { GetUser } from '../auth/get-user-decorator';
import { AdministratorEntity } from '../entities/administrator.entity';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    type: EventSerializer,
    description: 'イベント登録完了',
  })
  async createEvent(
    @GetUser(['admin']) _: AdministratorEntity,
  ): Promise<EventSerializer> {
    const event = await this.eventsService.createEvent();
    return event.transformToSerializer();
  }
}
