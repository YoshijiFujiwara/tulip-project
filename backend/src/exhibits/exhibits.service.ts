import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GroupRepository } from '../entities/group.repository';
import { ExhibitEntity } from '../entities/exhibit.entity';
import { UpdateExhibitDto } from './dto/update-exhibit.dto';
@Injectable()
export class ExhibitsService {
  constructor(
    @InjectRepository(ExhibitRepsitory)
    private exhibitRepsitory: ExhibitRepsitory,
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
  ) {}

  async createExhibit(
    createExhibitDto: CreateExhibitDto,
    exhibitor: ExhibitorEntity,
  ): Promise<ExhibitEntity> {
    const group = await this.groupRepository.findOne({
      relations: ['exhibit'],
      where: { id: exhibitor.groupId },
    });
    if (group.exhibit) {
      throw new ConflictException('作品は登録済みです');
    }

    return await this.exhibitRepsitory.createExhibit(createExhibitDto, group);
  }

  async getExhibits(): Promise<ExhibitEntity[]> {
    return await this.exhibitRepsitory.find();
  }

  async updateExhibit(
    exhibitId: number,
    {
      title,
      description,
      thumbnail,
      genre,
      presentationImage,
    }: UpdateExhibitDto,
    exhibitor: ExhibitorEntity,
  ): Promise<ExhibitEntity> {
    // ログインしているユーザーがグループを持っているか？
    const group = await this.groupRepository.findOne({
      relations: ['exhibit'],
      where: { id: exhibitor.groupId },
    });
    // グループがないとき~ == ユーザーがグループに属していない
    if (!group) {
      throw new BadRequestException('グループが見つかりません');
    }

    // グループの作品が存在しているか & 作品IDが一致しているか？
    if (!group.exhibit || exhibitId !== group.exhibit.id) {
      throw new BadRequestException('作品がまだ登録されていません');
    }

    const exhibit = group.exhibit;
    exhibit.title = title;
    exhibit.description = description;
    exhibit.thumbnail = thumbnail;
    exhibit.genre = genre;
    exhibit.presentationImage = presentationImage;
    return await exhibit.save();
  }
}
