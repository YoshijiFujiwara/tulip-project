import { Module } from '@nestjs/common';
import { AccessLogController } from './access-log.controller';
import { AccessLogService } from './access-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessLogRepository } from '../entities/accessLog.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AccessLogRepository])],
  controllers: [AccessLogController],
  providers: [AccessLogService],
})
export class AccessLogModule {}
