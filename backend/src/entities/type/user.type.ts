import { AdministratorEntity } from '../administrator.entity';
import { ExhibitorEntity } from '../exhibitor.entity';
import { AdministratorSerializer } from '../serializer/administrator.serializer';
import { ExhibitorSerializer } from '../serializer/exhibitor.serializer';

export type UserEntityType = AdministratorEntity | ExhibitorEntity;
export type UserSerializerType = AdministratorSerializer | ExhibitorSerializer;
