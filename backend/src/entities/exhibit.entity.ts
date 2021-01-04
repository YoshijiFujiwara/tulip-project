import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GroupEntity } from './group.entity';
import { ExhibitSerializer } from './serializer/exhibit.serializer';
import { BoothEntity } from './booth.entity';
import { PresentationImageEntity } from './presentationImage.entity';
import { EventEntity } from './event.entity';

export enum GENRE {
  GAME = 'game',
  MUSIC = 'music',
  MOVIE = 'movie',
  IT = 'it',
}

@Entity({
  name: 'exhibits',
})
export class ExhibitEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    length: 50,
  })
  @ApiProperty()
  title!: string;

  @Column({
    type: 'text',
  })
  @ApiProperty()
  description!: string;

  @Column({
    type: 'text',
  })
  @ApiProperty()
  thumbnail!: string;

  @Column()
  @ApiProperty()
  viewsCount!: number;

  @Column()
  @ApiProperty()
  goodCount!: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  @ApiProperty()
  demo?: string;

  @Column({
    length: 10,
  })
  @ApiProperty()
  modelUrl?: string;

  @Column({
    type: 'enum',
    enum: GENRE,
  })
  @ApiProperty({
    enum: GENRE,
  })
  genre!: GENRE;

  @Column()
  @ApiProperty()
  groupId!: number;

  @OneToOne(
    () => GroupEntity,
    group => group.exhibit,
  )
  @JoinColumn({ name: 'groupId' })
  group: GroupEntity;

  @Column()
  @ApiProperty()
  eventId!: number;

  @ManyToOne(
    () => EventEntity,
    event => event.exhibits,
  )
  @JoinColumn({ name: 'eventId' })
  event: EventEntity;

  @OneToOne(
    () => BoothEntity,
    booth => booth.exhibit,
  )
  booth: BoothEntity;

  @OneToMany(
    () => PresentationImageEntity,
    presentationImage => presentationImage.exhibit,
  )
  @ApiPropertyOptional({
    type: () => [PresentationImageEntity],
  })
  presentationImages: PresentationImageEntity[];

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

  transformToSerializer = (): ExhibitSerializer => {
    const exhibitSerializer = new ExhibitSerializer();
    exhibitSerializer.id = this.id;
    exhibitSerializer.title = this.title;
    exhibitSerializer.description = this.description;
    exhibitSerializer.thumbnail = this.thumbnail;
    exhibitSerializer.viewsCount = this.viewsCount;
    exhibitSerializer.goodCount = this.goodCount;
    exhibitSerializer.genre = this.genre;
    exhibitSerializer.groupId = this.groupId;
    exhibitSerializer.eventId = this.eventId;

    if (this.demo) {
      exhibitSerializer.demo = this.demo;
    }
    if (this.modelUrl) {
      exhibitSerializer.modelUrl = this.modelUrl;
    }
    if (this.group) {
      exhibitSerializer.group = this.group.transformToSerializer();
    }
    if (this.booth) {
      exhibitSerializer.booth = this.booth.transformToSerializer();
    }
    if (this.presentationImages) {
      exhibitSerializer.presentationImages = this.presentationImages.map(
        image => image.transformToSerializer(),
      );
    }
    if (this.event) {
      exhibitSerializer.event = this.event.transformToSerializer();
    }

    return exhibitSerializer;
  };
}
