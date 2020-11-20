import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExhibitRepsitory, GroupRepository])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
