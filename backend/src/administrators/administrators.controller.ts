import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdministratorsService } from './administrators.service';

@ApiTags('admin')
@Controller('admin')
export class AdministratorsController {
  constructor(private administratorsService: AdministratorsService) {}
}
