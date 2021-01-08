import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessLogRepository } from '../entities/accessLog.repository';
import { CountAccessLogDto } from './dto/count-access-log.dto';

@Injectable()
export class AccessLogService {
  constructor(
    @InjectRepository(AccessLogRepository)
    private accessLogRepository: AccessLogRepository,
  ) {}

  async countUp(
    header: { useragent: string; url: string },
    countAccessLogDto: CountAccessLogDto,
  ): Promise<void> {
    await this.accessLogRepository.countUp(header, countAccessLogDto);
  }

  async getAccessLog() {
    return await this.accessLogRepository.find();
  }
}
