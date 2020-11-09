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
  thumbnail: string;

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
  presentationImage: string;

  @Column()
  @ApiProperty()
  groupId: number;

  @OneToOne(
    () => GroupEntity,
    group => group.exhibit,
  )
  @JoinColumn({ name: 'groupId' })
  group: GroupEntity;

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
