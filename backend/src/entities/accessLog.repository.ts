import { EntityRepository, Repository } from 'typeorm';
import { AccessLogEntity } from './accessLog.entity';
import { CountAccessLogDto } from '../access-log/dto/count-access-log.dto';

@EntityRepository(AccessLogEntity)
export class AccessLogRepository extends Repository<AccessLogEntity> {
  async countUp(
    { useragent, url }: { useragent: string; url: string },
    { username, avatar }: CountAccessLogDto,
  ): Promise<void> {
    // 参照: https://qiita.com/kerupani129/items/adc0fba4ab248330e443#23-javascript-%E3%81%A7%E3%81%AE%E3%82%B3%E3%83%BC%E3%83%89
    const matchedFileName =
      url.match(
        /^(?:[^:/?#]+:)?(?:\/\/[^/?#]*)?(?:([^?#]*\/)([^/?#]*))?(\?[^#]*)?(?:#.*)?$/,
      ) ?? [];
    const [, resouce] = matchedFileName.map(match => match ?? '');

    const accessLog = new AccessLogEntity();
    accessLog.url = resouce;
    accessLog.username = username;
    accessLog.useragent = useragent;
    accessLog.avatar = avatar;
    await accessLog.save();
  }
}
