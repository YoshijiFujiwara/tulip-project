import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ExhibitorEntity } from './exhibitor.entity';

@Entity({
  name: 'groups',
})
export class GroupEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    length: 25,
  })
  @ApiProperty()
  name!: string;

  @OneToMany(
    () => ExhibitorEntity,
    exhibitor => exhibitor.group,
  )
  exhibitors: ExhibitorEntity[];
}
