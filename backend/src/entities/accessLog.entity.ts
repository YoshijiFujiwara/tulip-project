import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'access_log',
})
export class AccessLogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    type: 'text',
  })
  @ApiProperty()
  url!: string;

  @Column({
    length: 512,
  })
  @ApiProperty()
  useragent!: string;

  @Column({
    length: 20,
  })
  @ApiProperty()
  username!: string;

  @Column({
    length: 50,
  })
  @ApiProperty()
  avatar!: string;

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
