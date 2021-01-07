import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoothRepository } from '../entities/booth.repository';
import { CreateBoothDto } from './dto/create-booth.dto';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GroupRepository } from '../entities/group.repository';
import { BoothEntity } from '../entities/booth.entity';
import { UpdateBoothDto } from './dto/update-booth.dto';

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
      relations: ['exhibit', 'exhibit.booth'],
      where: { id: exhibitor.groupId },
    });
    if (group.exhibit.booth) {
      throw new ConflictException(
        'ブース番号が登録済みです。(API接続先切り替えエラー)',
      );
    }

    const isDuplicatedOtherGroup = await this.boothRepository.isDuplicatedOtherGroup(
      createBoothDto.positionNumber,
    );
    if (isDuplicatedOtherGroup) {
      throw new ConflictException(
        'このブース番号はすでに登録済みです。他の番号を指定してください。',
      );
    }

    return await this.boothRepository.createBooth(
      createBoothDto,
      group.exhibit,
    );
  }

  async updateBooth(
    updateBoothDto: UpdateBoothDto,
    exhibitor: ExhibitorEntity,
  ): Promise<BoothEntity> {
    const group = await this.groupRepository.findOne({
      relations: ['exhibit', 'exhibit.booth'],
      where: { id: exhibitor.groupId },
    });
    const isDuplicatedOtherGroup = await this.boothRepository.isDuplicatedOtherGroup(
      updateBoothDto.positionNumber,
    );
    if (isDuplicatedOtherGroup) {
      throw new ConflictException(
        'このブース番号はすでに登録済みです。他の番号を指定してください。',
      );
    }

    return await this.boothRepository.updateBooth(
      updateBoothDto,
      group.exhibit.booth,
    );
  }
}
