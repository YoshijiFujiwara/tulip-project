import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../entities/exhibitor.repository';

@Injectable()
export class ExhibitorsService {
  constructor(
    @InjectRepository(ExhibitorRepository)
    private exhibitorRepository: ExhibitorRepository,
  ) {}
}
