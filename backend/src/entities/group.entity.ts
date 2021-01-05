import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ExhibitorEntity } from './exhibitor.entity';
import { ExhibitEntity } from './exhibit.entity';
import { GroupSerializer } from './serializer/group.serizlier';

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

  @OneToOne(
    () => ExhibitEntity,
    exhibit => exhibit.group,
  )
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

  transformToSerializer = (): GroupSerializer => {
    const groupSerializer = new GroupSerializer();
    groupSerializer.id = this.id;
    groupSerializer.name = this.name;
    if (this.exhibitors) {
      groupSerializer.exhibitors = this.exhibitors.map(exhibitor =>
        exhibitor.transformToSerializer(),
      );
    }
    if (this.exhibit) {
      groupSerializer.exhibit = this.exhibit.transformToSerializer();
    }

    return groupSerializer;
  };
}
