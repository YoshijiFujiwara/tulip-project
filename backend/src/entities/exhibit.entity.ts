import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GroupEntity } from './group.entity';
import { ExhibitSerializer } from './serializer/exhibit.serializer';
import { BoothEntity } from './booth.entity';

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

  @Column({
    type: 'enum',
    enum: GENRE,
  })
  @ApiProperty({
    enum: GENRE,
  })
  genre!: GENRE;

  @Column({
    type: 'text',
  })
  @ApiProperty()
  presentationImage!: string;

  @Column()
  @ApiProperty()
  groupId!: number;

  @OneToOne(
    () => GroupEntity,
    group => group.exhibit,
  )
  @JoinColumn({ name: 'groupId' })
  group: GroupEntity;

  @OneToOne(
    () => BoothEntity,
    booth => booth.exhibit,
  )
  booth: BoothEntity;

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
    exhibitSerializer.genre = this.genre;
    exhibitSerializer.presentationImage = this.presentationImage;
    exhibitSerializer.groupId = this.groupId;
    if (this.group) {
      exhibitSerializer.group = this.group.transformToSerializer();
    }
    if (this.booth) {
      exhibitSerializer.booth = this.booth.transformToSerializer();
    }

    return exhibitSerializer;
  };
}
