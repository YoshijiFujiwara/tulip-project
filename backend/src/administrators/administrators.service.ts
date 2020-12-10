import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministratorRepository } from '../entities/administrator.repository';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectRepository(AdministratorRepository)
    private administratorRepository: AdministratorRepository,
  ) {}
}
