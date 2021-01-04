import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { EventSerializer } from './serializer/event.serializer';

@Entity({
  name: 'events',
})
export class EventEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({ type: 'timestamp' })
  @ApiProperty()
  startAt?: Date;

  @Column({ type: 'timestamp' })
  @ApiProperty()
  endAt?: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @ApiProperty()
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  @ApiProperty()
  updatedAt!: Date;

  transformToSerializer = (): EventSerializer => {
    const eventSerializer = new EventSerializer();
    eventSerializer.id = this.id;
    eventSerializer.startAt = this.startAt;
    eventSerializer.endAt = this.endAt;

    return eventSerializer;
  };
}
