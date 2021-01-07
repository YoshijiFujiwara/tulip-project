import { Module } from '@nestjs/common';
import { AccessLogController } from './access-log.controller';
import { AccessLogService } from './access-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessLogEntity } from '../entities/accessLog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessLogEntity])],
  controllers: [AccessLogController],
  providers: [AccessLogService],
})
export class AccessLogModule {}
