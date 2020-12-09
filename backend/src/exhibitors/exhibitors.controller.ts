import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExhibitorsService } from './exhibitors.service';

@ApiTags('exhibitors')
@Controller('exhibitors')
export class ExhibitorsController {
  constructor(private exhibitorsService: ExhibitorsService) {}
}
