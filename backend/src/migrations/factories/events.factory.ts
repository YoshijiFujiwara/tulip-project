import { define } from 'typeorm-seeding';
import { EventEntity } from '../../entities/event.entity';

define(EventEntity, (): EventEntity => {
  const event = new EventEntity();
  const start = new Date(2021, 0, 10, 11, 0);
  const end = new Date(2021, 0, 10, 20, 0);
  event.startAt = start;
  event.endAt = end;

  return event;
});
