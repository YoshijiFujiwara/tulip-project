import {
  Body,
  Controller,
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
  ApiBearerAuth,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExhibitsService } from './exhibits.service';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { ExhibitEntity, GENRE } from '../entities/exhibit.entity';
import { GetUser } from '../auth/get-user-decorator';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitSerializer } from '../entities/serializer/exhibit.serializer';

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
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  exhibitUpdate() {
    const exhibit1 = new ExhibitEntity();
    exhibit1.title = '作品名1やで';
    exhibit1.description = 'hogehogs1';
    exhibit1.thumbnail =
      'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg';
    exhibit1.presentationImage =
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD';
    exhibit1.genre = GENRE.IT;
    exhibit1.groupId = 1;
    return exhibit1;
  }

  // 作品一覧は、参加者が叩くので、JWT認証はしない
  @Get()
  @ApiResponse({
    status: 200,
    type: [ExhibitSerializer],
    description: '作品情報一覧を配列で取得',
  })
  getAllExhibits() {
    const exhibit1 = new ExhibitEntity();
    exhibit1.title = '作品名1やで';
    exhibit1.description = 'hogehogs1';
    exhibit1.thumbnail =
      'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg';
    exhibit1.presentationImage =
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD';
    exhibit1.genre = GENRE.IT;
    exhibit1.groupId = 1;

    const exhibit2 = new ExhibitEntity();
    exhibit2.title = '作品名2やで';
    exhibit2.description = 'hogehogs2';
    exhibit2.thumbnail =
      'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg';
    exhibit2.presentationImage =
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD';
    exhibit2.genre = GENRE.GAME;
    exhibit2.groupId = 2;
    return [exhibit1, exhibit2];
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
