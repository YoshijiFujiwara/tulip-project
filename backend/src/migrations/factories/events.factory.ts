import { define } from 'typeorm-seeding';
import { EventEntity } from '../../entities/event.entity';

define(EventEntity, (): EventEntity => {
  const event = new EventEntity();
  event.limitAt = new Date();

  return event;
});
