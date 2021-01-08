import { EntityRepository, Repository } from 'typeorm';
import { AccessLogEntity } from './accessLog.entity';

@EntityRepository(AccessLogEntity)
export class AccessLogRepository extends Repository<AccessLogEntity> {}
