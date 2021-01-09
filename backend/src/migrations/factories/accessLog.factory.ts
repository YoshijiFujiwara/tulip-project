import { DummyAccessLog } from './../seeds/providers/accessLog.seed.provider';
import { define } from 'typeorm-seeding';
import { AccessLogEntity } from '../../entities/accessLog.entity';
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}
randomDate(new Date(2012, 0, 1), new Date());
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
  accessLog.createdAt = randomDate(new Date(2020, 1, 9, 9), new Date(2020, 1, 9, 19));
  return accessLog;
});