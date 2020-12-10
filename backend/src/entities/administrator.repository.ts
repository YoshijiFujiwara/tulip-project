import { EntityRepository, Repository } from 'typeorm';
import { AdministratorEntity } from './administrator.entity';

@EntityRepository(AdministratorEntity)
export class AdministratorRepository extends Repository<AdministratorEntity> {}
