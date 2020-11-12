import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExhibitorSerializer } from './exhibitor.serializer';
import { ExhibitSerializer } from './exhibit.serializer';

export class GroupSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional({
    type: () => [ExhibitorSerializer],
  })
  exhibitors: ExhibitorSerializer[];

  @ApiPropertyOptional({
    type: () => [ExhibitSerializer],
  })
  exhibit: ExhibitSerializer;
}
