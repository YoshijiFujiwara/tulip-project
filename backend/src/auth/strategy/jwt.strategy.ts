import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../../entities/exhibitor.repository';
import { ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';
import { AdministratorEntity } from '../../entities/administrator.entity';
import { AdministratorRepository } from '../../entities/administrator.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
    @InjectRepository(AdministratorRepository)
    private administratorRepository: AdministratorRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate({
    studentNumber,
    name,
    role,
  }: JwtPayload): Promise<ExhibitorEntity | AdministratorEntity> {
    const user = await (async role => {
      switch (role) {
        case 'student':
          return await this.exhibitorRepository.findOne({
            studentNumber,
          });
        case 'admin':
          return await this.administratorRepository.findOne({ name });
        default:
          return null;
      }
    })(role);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
