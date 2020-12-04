import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BoothsService } from './booths.service';

@ApiTags('booths')
@Controller('booths')
export class BoothsController {
  constructor(private boothsService: BoothsService) {}
}
