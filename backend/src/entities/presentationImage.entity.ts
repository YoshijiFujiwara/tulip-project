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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExhibitEntity } from './exhibit.entity';
import { PresentationImageSerializer } from './serializer/presentationImage.serializer';

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
  page!: number;

  @Column()
  @ApiProperty()
  exhibitId!: number;

  @ManyToOne(
    () => ExhibitEntity,
    exhibit => exhibit.presentationImages,
  )
  @JoinColumn({ name: 'exhibitId' })
  @ApiPropertyOptional({
    type: () => ExhibitEntity,
  })
  exhibit?: ExhibitEntity;

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

  transformToSerializer = () => {
    const presentationImage = new PresentationImageSerializer();
    presentationImage.id = this.id;
    presentationImage.url = this.url;
    presentationImage.exhibitId = this.exhibitId;
    if (this.exhibit) {
      presentationImage.exhibit = this.exhibit.transformToSerializer();
    }
    return presentationImage;
  };
}
