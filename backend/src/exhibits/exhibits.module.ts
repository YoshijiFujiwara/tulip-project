import { Module } from '@nestjs/common';
import { ExhibitsController } from './exhibits.controller';
import { ExhibitsService } from './exhibits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExhibitRepsitory, GroupRepository])],
  controllers: [ExhibitsController],
  providers: [ExhibitsService],
})
export class ExhibitsModule {}
