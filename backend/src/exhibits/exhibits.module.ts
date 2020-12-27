import { Module } from '@nestjs/common';
import { ExhibitsController } from './exhibits.controller';
import { ExhibitsService } from './exhibits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';
import { PresentationImageRepository } from '../entities/presentationImage.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ExhibitRepsitory,
      GroupRepository,
      PresentationImageRepository,
    ]),
  ],
  controllers: [ExhibitsController],
  providers: [ExhibitsService],
})
export class ExhibitsModule {}
