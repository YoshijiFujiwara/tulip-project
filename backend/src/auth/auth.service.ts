import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorEntity } from './exhibitor.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ExhibitorEntity)
    private exhibitor: ExhibitorEntity,
  ) {}
}
