import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BoothsService } from './booths.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateBoothDto } from './dto/create-booth.dto';
import { GetUser } from '../auth/get-user-decorator';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { BoothSerializer } from '../entities/serializer/booth.serializer';

@ApiTags('booths')
@Controller('booths')
export class BoothsController {
  constructor(private boothsService: BoothsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
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
}
