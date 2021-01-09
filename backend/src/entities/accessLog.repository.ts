import { EntityRepository, Repository } from 'typeorm';
import { AccessLogEntity } from './accessLog.entity';
import { CountAccessLogQueryDto } from '../access-log/dto/count-access-log-query.dto';
import { CountAccessLogBodyDto } from '../access-log/dto/count-access-log-body.dto';

@EntityRepository(AccessLogEntity)
export class AccessLogRepository extends Repository<AccessLogEntity> {
  async countUp(
    { useragent }: { useragent: string },
    { username, avatar }: CountAccessLogQueryDto,
    { url }: CountAccessLogBodyDto,
  ): Promise<void> {
    const accessLog = new AccessLogEntity();
    accessLog.url = url;
    accessLog.username = username;
    accessLog.useragent = useragent;
    accessLog.avatar = avatar;
    await accessLog.save();
  }
}
