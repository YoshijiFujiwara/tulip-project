import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../entities/exhibitor.repository';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { AdministratorRepository } from '../entities/administrator.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
    @InjectRepository(AdministratorRepository)
    private administratorRepository: AdministratorRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInExhibitorDto: SignInExhibitorDto) {
    const studentNumber = await this.exhibitorRepository.validatePassword(
      signInExhibitorDto,
    );
    if (!studentNumber) {
      throw new UnauthorizedException('学籍番号またはパスワードが違います');
    }

    const payload: JwtPayload = {
      studentNumber,
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
