import {
  Body,
  Controller,
  HttpCode,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExhibitsService } from './exhibits.service';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { ExhibitEntity,GENRE } from '../entities/exhibit.entity';
import { GetUser } from '../auth/get-user-decorator';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitSerializer } from '../entities/serializer/exhibit.serializer';

@ApiTags('exhibits')
@Controller('exhibits')

export class ExhibitsController {
  constructor(private exhibitsService: ExhibitsService) {}
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: '作品登録完了',
  })
  @ApiConflictResponse({
    description: '作品重複登録時のエラー',
  })
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
  exhibitUpdate(){
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
}
