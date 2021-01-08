import {
  Body,
  Controller,
  HttpCode,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BoothsService } from './booths.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateBoothDto } from './dto/create-booth.dto';
import { GetUser } from '../auth/get-user-decorator';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { BoothSerializer } from '../entities/serializer/booth.serializer';
import { UpdateBoothDto } from './dto/update-booth.dto';

@ApiTags('booths')
@Controller('booths')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class BoothsController {
  constructor(private boothsService: BoothsService) {}

  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    description: 'ブース登録完了',
    type: BoothSerializer,
  })
  async createBooth(
    @Body(ValidationPipe) createBoothDto: CreateBoothDto,
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<BoothSerializer> {
    const booth = await this.boothsService.createBooth(
      createBoothDto,
      exhibitor,
    );
    return booth.transformToSerializer();
  }

  @Put()
  @ApiOkResponse({
    description: 'ブース変更完了',
    type: BoothSerializer,
  })
  async updateBooth(
    @Body(ValidationPipe) updateBoothDto: UpdateBoothDto,
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<BoothSerializer> {
    const booth = await this.boothsService.updateBooth(
      updateBoothDto,
      exhibitor,
    );
    return booth.transformToSerializer();
  }
}
