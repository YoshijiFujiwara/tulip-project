import { ExhibitorSerializer } from './serializer/exhibitor.serializer';
import * as bcrypt from 'bcrypt';
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
import { GroupEntity } from './group.entity';

@Entity({
  name: 'exhibitors',
})
export class ExhibitorEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    unique: true,
    length: 10,
  })
  @ApiProperty()
  studentNumber!: string;

  @Column({
    length: 255,
    transformer: {
      to: (raw: string) => bcrypt.hashSync(raw, 5),
      from: (hashed: string) => hashed,
    },
  })
  @ApiProperty()
  password!: string;

  @Column({
    length: 25,
  })
  @ApiProperty()
  name!: string;

  @Column({ type: 'timestamp' })
  @ApiProperty()
  lastLoggedinAt!: Date;

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

  @Column()
  @ApiProperty()
  groupId!: number;

  @ManyToOne(
    () => GroupEntity,
    group => group.exhibitors,
  )
  @JoinColumn({ name: 'groupId' })
  group: GroupEntity;

  transformToSerializer = (): ExhibitorSerializer => {
    const exhibitorSerializer = new ExhibitorSerializer();
    exhibitorSerializer.id = this.id;
    exhibitorSerializer.studentNumber = this.studentNumber;
    exhibitorSerializer.name = this.name;
    exhibitorSerializer.lastLoggedinAt = this.lastLoggedinAt;
    exhibitorSerializer.groupId = this.groupId;
    if (this.group) {
      exhibitorSerializer.group = this.group.transformToSerializer();
    }

    return exhibitorSerializer;
  };
}
