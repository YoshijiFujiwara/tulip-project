import { EntityRepository, Repository } from 'typeorm';
import { ExhibitorEntity } from './exhibitor.entity';
import { SignInExhibitorDto } from '../auth/dto/sign-in-exhibitor.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(ExhibitorEntity)
export class ExhibitorRepository extends Repository<ExhibitorEntity> {
  async validatePassword({
    studentNumber,
    password,
  }: SignInExhibitorDto): Promise<ExhibitorEntity> {
    const user = await this.findOne({ studentNumber });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async updateLastLoggedinAt({ id }: ExhibitorEntity): Promise<void> {
    const now = new Date();
    const lastLoggedinAt = now;
    const attendedAt = now;
    await this.update({ id }, { lastLoggedinAt, attendedAt });
  }
}
