import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { AdministratorSerializer } from './serializer/administrator.serializer';

@Entity({
  name: 'administrators',
})
export class AdministratorEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    length: 25,
  })
  @ApiProperty()
  name!: string;

  @Column({
    length: 255,
    transformer: {
      to: (raw: string) => bcrypt.hashSync(raw, 5),
      from: (hashed: string) => hashed,
    },
  })
  @ApiProperty()
  password!: string;

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

  transformToSerializer = (): AdministratorSerializer => {
    const administrator = new AdministratorSerializer();
    administrator.id = this.id;
    administrator.name = this.name;
    return administrator;
  };
}
