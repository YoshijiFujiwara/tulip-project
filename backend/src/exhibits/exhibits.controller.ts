import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ExhibitsService } from './exhibits.service';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { GetUser } from '../auth/get-user-decorator';
import { CreateExhibitDto } from './dto/create-exhibit.dto';
import { ExhibitSerializer } from '../entities/serializer/exhibit.serializer';

@ApiTags('exhibits')
@Controller('exhibits')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ExhibitsController {
  constructor(private exhibitsService: ExhibitsService) {}

  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    type: ExhibitSerializer,
    description: '作品登録完了',
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
}
