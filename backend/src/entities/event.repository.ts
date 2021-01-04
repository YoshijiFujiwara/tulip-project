import { EntityRepository, Repository } from 'typeorm';
import { EventEntity } from './event.entity';

@EntityRepository(EventEntity)
export class EventRepository extends Repository<EventEntity> {
  async createEvent(): Promise<EventEntity> {
    const event = new EventEntity();
    event.limitAt = new Date();
    await event.save();

    return event;
  }
}
