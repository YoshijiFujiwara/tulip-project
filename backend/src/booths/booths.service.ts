import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoothRepository } from '../entities/booth.repository';
import { CreateBoothDto } from './dto/create-booth.dto';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GroupRepository } from '../entities/group.repository';

@Injectable()
export class BoothsService {
  constructor(
    @InjectRepository(BoothRepository)
    private boothRepository: BoothRepository,
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async createBooth(
    createBoothDto: CreateBoothDto,
    exhibitor: ExhibitorEntity,
  ) {
    // 登録番号が重複していないかチェック
  }
}
