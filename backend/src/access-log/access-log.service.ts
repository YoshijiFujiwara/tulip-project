import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessLogRepository } from '../entities/accessLog.repository';
import { CountAccessLogQueryDto } from './dto/count-access-log-query.dto';
import { CountAccessLogBodyDto } from './dto/count-access-log-body.dto';

@Injectable()
export class AccessLogService {
  constructor(
    @InjectRepository(AccessLogRepository)
    private accessLogRepository: AccessLogRepository,
  ) {}

  async countUp(
    header: { useragent: string },
    countAccessLogQueryDto: CountAccessLogQueryDto,
    countAccessLogBodyDto: CountAccessLogBodyDto,
  ): Promise<void> {
    await this.accessLogRepository.countUp(
      header,
      countAccessLogQueryDto,
      countAccessLogBodyDto,
    );
  }

  async getAccessLog() {
    return await this.accessLogRepository.find();
  }
}
