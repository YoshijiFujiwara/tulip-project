import { EntityRepository, Repository } from 'typeorm';
import { ExhibitorEntity } from '../entities/exhibitor';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';

@EntityRepository(ExhibitorEntity)
export class ExhibitorRepository extends Repository<ExhibitorEntity> {
  async validatePassword({ studentNumebr, password }: SignInExhibitorDto) {
    const user = await this.findOne({ studentNumebr, password });
    return user;
  }
}
