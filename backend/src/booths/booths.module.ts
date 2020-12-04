import { Module } from '@nestjs/common';
import { BoothsController } from './booths.controller';
import { BoothsService } from './booths.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoothRepository } from '../entities/booth.repository';
import { GroupRepository } from '../entities/group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoothRepository, GroupRepository])],
  controllers: [BoothsController],
  providers: [BoothsService],
})
export class BoothsModule {}
