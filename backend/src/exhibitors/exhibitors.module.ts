import { Module } from '@nestjs/common';
import { ExhibitorsController } from './exhibitors.controller';
import { ExhibitorsService } from './exhibitors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitorRepository } from '../entities/exhibitor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExhibitorRepository])],
  controllers: [ExhibitorsController],
  providers: [ExhibitorsService],
})
export class ExhibitorsModule {}
