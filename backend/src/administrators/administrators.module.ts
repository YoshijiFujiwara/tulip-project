import { Module } from '@nestjs/common';
import { AdministratorsController } from './administrators.controller';
import { AdministratorsService } from './administrators.service';
import { AdministratorRepository } from '../entities/administrator.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AdministratorRepository])],
  controllers: [AdministratorsController],
  providers: [AdministratorsService],
})
export class AdministratorsModule {}
