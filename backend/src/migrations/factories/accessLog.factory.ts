import { DummyAccessLog } from './../seeds/providers/accessLog.seed.provider';
import { define } from 'typeorm-seeding';
import { AccessLogEntity } from '../../entities/accessLog.entity';

define(AccessLogEntity, (
  _,
  { id, url, useragent, username, avatar }: DummyAccessLog,
) => {
  const accessLog = new AccessLogEntity();
  accessLog.id = id;
  accessLog.url = url;
  accessLog.useragent = useragent;
  accessLog.username = username;
  accessLog.avatar = avatar;

  return accessLog;
});
