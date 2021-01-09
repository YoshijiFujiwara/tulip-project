import { EntityRepository, Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { UpdateEventDto } from '../events/dto/update-event.dto';

@EntityRepository(EventEntity)
export class EventRepository extends Repository<EventEntity> {
  async updateEvent({ startAt, endAt }: UpdateEventDto): Promise<EventEntity> {
    const event = await this.findOne();
    event.startAt = startAt;
    event.endAt = endAt;
    await event.save();

    return event;
  }
}
