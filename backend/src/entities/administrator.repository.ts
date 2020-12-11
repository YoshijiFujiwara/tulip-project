import { EntityRepository, Repository } from 'typeorm';
import { AdministratorEntity } from './administrator.entity';
import { SignInAdministratorDto } from '../auth/dto/sign-in-administrator.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(AdministratorEntity)
export class AdministratorRepository extends Repository<AdministratorEntity> {
  async validatePassword({
    name,
    password,
  }: SignInAdministratorDto): Promise<string> {
    const user = await this.findOne({ name });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user.name;
    }
    return null;
  }
}
