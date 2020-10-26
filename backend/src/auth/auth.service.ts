import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from './exhibitor.repository';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
  ) {}

  async signIn(signInExhibitorDto: SignInExhibitorDto) {
    return await this.exhibitorRepository.validatePassword(signInExhibitorDto);
  }
}
