import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';
import { ExhibitorRepository } from '../entities/exhibitor.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ExhibitRepsitory,
      GroupRepository,
      ExhibitorRepository,
    ]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
