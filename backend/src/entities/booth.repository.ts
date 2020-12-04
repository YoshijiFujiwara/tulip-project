import { EntityRepository, Repository } from 'typeorm';
import { BoothEntity } from './booth.entity';

@EntityRepository(BoothEntity)
export class BoothRepository extends Repository<BoothEntity> {}
