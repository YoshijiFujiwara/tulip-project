import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GroupSerializer } from '../../entities/serializer/group.serizlier';

export class ExhibitorSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  studentNumber: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastLoggedinAt: Date;

  @ApiProperty()
  groupId: number;

  @ApiPropertyOptional({
    type: () => [GroupSerializer],
  })
  group?: GroupSerializer;
}
