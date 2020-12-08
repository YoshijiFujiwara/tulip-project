import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ExhibitEntity } from './exhibit.entity';
import { BoothSerializer } from './serializer/booth.serializer';

@Entity({
  name: 'booths',
})
export class BoothEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id!: number;

  @Column({
    unique: true,
  })
  @ApiProperty()
  positionNumber!: number;

  @Column()
  @ApiProperty()
  exhibitId: number;

  @OneToOne(
    () => ExhibitEntity,
    exhibit => exhibit.booth,
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

  transformToSerializer = (): BoothSerializer => {
    const boothSerializer = new BoothSerializer();
    boothSerializer.id = this.id;
    boothSerializer.positionNumber = this.positionNumber;
    boothSerializer.exhibitId = this.exhibitId;
    if (this.exhibit) {
      boothSerializer.exhibit = this.exhibit.transformToSerializer();
    }

    return boothSerializer;
  };
}
