import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../../entities/exhibitor.repository';
import { ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { ExhibitorEntity } from '../../entities/exhibitor.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate({ studentNumber }: JwtPayload): Promise<ExhibitorEntity> {
    const exhibitor = await this.exhibitorRepository.findOne({ studentNumber });
    if (!exhibitor) {
      throw new UnauthorizedException();
    }
    return exhibitor;
  }
}
