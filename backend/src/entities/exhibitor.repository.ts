import { EntityRepository, Repository } from 'typeorm';
import { ExhibitorEntity } from './exhibitor.entity';
import { SignInExhibitorDto } from '../auth/dto/sign-in-exhibitor.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(ExhibitorEntity)
export class ExhibitorRepository extends Repository<ExhibitorEntity> {
  async validatePassword({
    studentNumber,
    password,
  }: SignInExhibitorDto): Promise<string> {
    const user = await this.findOne({ studentNumber });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user.studentNumber;
    }
    return null;
  }
}
