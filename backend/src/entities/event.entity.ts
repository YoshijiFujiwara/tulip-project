import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ExhibitEntity } from './exhibit.entity';
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
  limitAt?: Date;

  @OneToMany(
    () => ExhibitEntity,
    exhibit => exhibit.event,
  )
  @ApiProperty({
    type: () => [ExhibitEntity],
  })
  exhibits?: ExhibitEntity[];

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
    eventSerializer.limitAt = this.limitAt;
    if (this.exhibits) {
      eventSerializer.exhibits = this.exhibits.map(e =>
        e.transformToSerializer(),
      );
    }

    return eventSerializer;
  };
}