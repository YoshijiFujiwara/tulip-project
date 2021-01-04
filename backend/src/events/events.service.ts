import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from '../entities/event.repository';
import { EventEntity } from '../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  async createEvent(): Promise<EventEntity> {
    return await this.eventRepository.createEvent();
  }
}
