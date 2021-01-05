import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from '../entities/event.repository';
import { EventEntity } from '../entities/event.entity';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  async updateEvent(updateEventDto: UpdateEventDto): Promise<EventEntity> {
    const { startAt, endAt } = updateEventDto;

    if (startAt >= endAt) {
      throw new BadRequestException(
        '開始日時に終了日時と同値またはそれより後の値が入力されています。',
      );
    }

    return await this.eventRepository.updateEvent(updateEventDto);
  }

  async getEvent(): Promise<EventEntity> {
    return await this.eventRepository.findOne();
  }
}
