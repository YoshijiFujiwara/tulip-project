import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepository } from '../entities/event.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EventRepository])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
