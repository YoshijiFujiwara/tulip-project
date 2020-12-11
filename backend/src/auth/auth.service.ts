import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../entities/exhibitor.repository';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { AdministratorRepository } from '../entities/administrator.repository';
import { SignInAdministratorDto } from './dto/sign-in-administrator.dto';

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
    const ExhibitorEntity = await this.exhibitorRepository.validatePassword(
      signInExhibitorDto,
    );
    if (!ExhibitorEntity) {
      throw new UnauthorizedException('学籍番号またはパスワードが違います');
    }

    await this.exhibitorRepository.updateLastLoggedinAt(ExhibitorEntity);

    const payload: JwtPayload = {
      studentNumber: ExhibitorEntity.studentNumber,
      role: 'student',
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  async singInAdmin(signInAdministratorDto: SignInAdministratorDto) {
    const name = await this.administratorRepository.validatePassword(
      signInAdministratorDto,
    );
    if (!name) {
      throw new UnauthorizedException('ユーザー名またはパスワードが違います');
    }

    const payload: JwtPayload = {
      name,
      role: 'admin',
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
