import { define } from 'typeorm-seeding';
import { AdministratorEntity } from '../../entities/administrator.entity';

interface Context {
  id: number;
}

define(AdministratorEntity, (_, { id }: Context): AdministratorEntity => {
  const administrator = new AdministratorEntity();
  administrator.id = id;
  administrator.name = `admin${id}`;
  administrator.password = `admin`;

  return administrator;
});
