import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ExhibitEntity } from './exhibit.entity';

@Entity({
  name: 'presentation_images',
})
export class PresentationImageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    type: 'text',
  })
  @ApiProperty()
  url!: string;

  @Column()
  @ApiProperty()
  exhibitId!: number;

  @ManyToOne(
    () => ExhibitEntity,
    exhibit => exhibit.presentationImages,
  )
  @JoinColumn({ name: 'exhibitId' })
  exhibit: ExhibitEntity;

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
}
