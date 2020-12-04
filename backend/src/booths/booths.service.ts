import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoothRepository } from '../entities/booth.repository';

@Injectable()
export class BoothsService {
  constructor(
    @InjectRepository(BoothRepository)
    private boothRepository: BoothRepository,
  ) {}
}
