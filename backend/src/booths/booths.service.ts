import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoothRepository } from '../entities/booth.repository';
import { CreateBoothDto } from './dto/create-booth.dto';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GroupRepository } from '../entities/group.repository';
import { BoothEntity } from '../entities/booth.entity';

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
  ): Promise<BoothEntity> {
    const group = await this.groupRepository.findOne({
      relations: ['exhibit'],
      where: { id: exhibitor.groupId },
    });

    if (
      await this.boothRepository.isDuplicatedOtherGroup(
        createBoothDto,
        group.exhibit,
      )
    ) {
      throw new ConflictException(
        'このブース番号はすでに登録済みです。他の番号を指定してください。',
      );
    }

    return await this.boothRepository.createBooth(
      createBoothDto,
      group.exhibit,
    );
  }
}
