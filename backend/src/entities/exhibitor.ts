import { ExhibitorSerializer } from '../auth/serializer/exhibitor.serializer';
import * as bcrypt from 'bcrypt';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'exhibitors',
})
export class ExhibitorEntity extends BaseEntity {
  @PrimaryColumn({
    unique: true,
    length: 36,
  })
  id: string;

  @Column({
    unique: true,
    length: 10,
  })
  studentNumber: string;

  @Column({
    length: 255,
    transformer: {
      async to(raw: string) {
        return await bcrypt.hash(raw, 5);
      },
      from(hashed: string) {
        return hashed;
      },
    },
  })
  password: string;

  @Column({
    length: 10,
  })
  name: string;

  @Column({ type: 'timestamp' })
  lastLoggedinAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  transformToSerializer = (): ExhibitorSerializer => {
    const exhibitorSerializer = new ExhibitorSerializer();
    exhibitorSerializer.id = this.id;
    exhibitorSerializer.studentNumber = this.studentNumber;
    exhibitorSerializer.name = this.name;
    exhibitorSerializer.lastLoggedinAt = this.lastLoggedinAt;

    return exhibitorSerializer;
  };
}
