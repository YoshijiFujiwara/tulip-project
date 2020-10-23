import { EntityRepository, Repository } from 'typeorm';
import { ExhibitorEntity } from './exhibitor.entity';

@EntityRepository(ExhibitorEntity)
export class ExhibitorRepository extends Repository<ExhibitorEntity> {}
