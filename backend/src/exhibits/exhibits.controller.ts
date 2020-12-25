import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExhibitsService } from './exhibits.service';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GetUser } from '../auth/get-user-decorator';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitSerializer } from '../entities/serializer/exhibit.serializer';
import { UpdateExhibitDto } from './dto/update-exhibit.dto';

@ApiTags('exhibits')
@Controller('exhibits')
export class ExhibitsController {
  constructor(private exhibitsService: ExhibitsService) {}

  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: '作品登録完了',
  })
  @ApiConflictResponse({
    description: '作品重複登録時のエラー',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async createExhibits(
    @Body(ValidationPipe) createExhibitDto: CreateExhibitDto,
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<ExhibitSerializer> {
    const exhibit = await this.exhibitsService.createExhibit(
      createExhibitDto,
      exhibitor,
    );
    return exhibit.transformToSerializer();
  }

  @Put(':id')
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: '作品更新完了',
  })
  @ApiBadRequestResponse({
    description: '作品またはグループが存在しませんでした',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async updateExhibit(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateExhibitDto: UpdateExhibitDto,
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<ExhibitSerializer> {
    const exhibit = await this.exhibitsService.updateExhibit(
      id,
      updateExhibitDto,
      exhibitor,
    );
    return exhibit.transformToSerializer();
  }

  @Put(':id/incrementViewsCount')
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: '閲覧人数更新成功',
  })
  async incrementViewsCount(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ExhibitSerializer> {
    const exhibit = await this.exhibitsService.incrementViewsCount(id);
    return exhibit.transformToSerializer();
  }

  @Put(':id/incrementGoodCount')
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: 'いいね数更新成功',
  })
  async incrementGoodCount(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ExhibitSerializer> {
    const exhibit = await this.exhibitsService.incrementGoodCount(id);
    return exhibit.transformToSerializer();
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({
    description: '作品削除完了',
  })
  @ApiBadRequestResponse({
    description: '作品またはグループが存在しませんでした',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteExhibit(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<void> {
    await this.exhibitsService.deleteExhibit(id, exhibitor);
  }

  // 作品一覧は、参加者が叩くので、JWT認証はしない
  @Get()
  @ApiResponse({
    status: 200,
    type: [ExhibitSerializer],
    description: '作品情報一覧を配列で取得',
  })
  async getExhibits(): Promise<ExhibitSerializer[]> {
    const exhibits = await this.exhibitsService.getExhibits();
    return exhibits.map(e => e.transformToSerializer());
  }

  @Get(':id')
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: '作品情報を取得',
  })
  @ApiNotFoundResponse({
    description: 'IDに該当する作品情報が存在しなかった',
  })
  async getExhibit(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ExhibitSerializer> {
    const exhibit = await this.exhibitsService.getExhibit(id);
    return exhibit.transformToSerializer();
  }
}
