import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GroupRepository } from '../entities/group.repository';
import { ExhibitEntity } from '../entities/exhibit.entity';
import { UpdateExhibitDto } from './dto/update-exhibit.dto';
import { PresentationImageRepository } from '../entities/presentationImage.repository';

@Injectable()
export class ExhibitsService {
  constructor(
    @InjectRepository(ExhibitRepsitory)
    private exhibitRepsitory: ExhibitRepsitory,
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
    @InjectRepository(PresentationImageRepository)
    private presentationImageRepository: PresentationImageRepository,
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

    const exhibit = await this.exhibitRepsitory.createExhibit(
      createExhibitDto,
      group,
    );
    exhibit.presentationImages = await this.presentationImageRepository.createPresentationImages(
      createExhibitDto,
      exhibit.id,
    );
    return exhibit;
  }

  async getExhibit(exhibitId: number): Promise<ExhibitEntity> {
    const exhibit = await this.exhibitRepsitory.findOne({
      relations: ['group'],
      where: { id: exhibitId },
    });
    if (!exhibit) {
      throw new NotFoundException('該当する作品が存在しません。');
    }
    return exhibit;
  }

  async getExhibits(): Promise<ExhibitEntity[]> {
    return await this.exhibitRepsitory.find({
      relations: ['booth', 'group'],
    });
  }

  async updateExhibit(
    exhibitId: number,
    updateExhibitDto: UpdateExhibitDto,
    exhibitor: ExhibitorEntity,
  ): Promise<ExhibitEntity> {
    const { title, description, thumbnail, genre, demo } = updateExhibitDto;

    const group = await this.groupRepository.findOne({
      relations: ['exhibit'],
      where: { id: exhibitor.groupId },
    });
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
    exhibit.demo = demo ?? null;
    const updatedExhibit = await exhibit.save();

    await this.presentationImageRepository.delete({ exhibitId: exhibit.id });
    updatedExhibit.presentationImages = await this.presentationImageRepository.createPresentationImages(
      updateExhibitDto,
      exhibit.id,
    );
    return updatedExhibit;
  }

  async deleteExhibit(
    exhibitId: number,
    exhibitor: ExhibitorEntity,
  ): Promise<void> {
    const group = await this.groupRepository.findOne({
      relations: ['exhibit'],
      where: { id: exhibitor.groupId },
    });
    if (!group) {
      throw new BadRequestException('グループが見つかりません');
    }
    if (!group.exhibit || exhibitId !== group.exhibit.id) {
      throw new BadRequestException('作品がまだ登録されていません');
    }

    const result = await this.exhibitRepsitory.delete({ id: exhibitId });
    if (result.affected === 0) {
      throw new NotFoundException(`Exhibits with ID "${exhibitId}" not found`);
    }
  }
}
