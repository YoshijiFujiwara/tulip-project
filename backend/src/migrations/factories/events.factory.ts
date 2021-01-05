import { define } from 'typeorm-seeding';
import { EventEntity } from '../../entities/event.entity';

define(EventEntity, (): EventEntity => {
  const event = new EventEntity();
  const start = new Date(2021, 2, 10, 9, 0);
  const end = new Date(2021, 2, 10, 18, 0);
  event.startAt = start;
  event.endAt = end;

  return event;
});
