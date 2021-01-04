import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExhibitSerializer } from './exhibit.serializer';

export class EventSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  limitAt: Date;

  @ApiPropertyOptional({
    type: () => [ExhibitSerializer],
  })
  exhibits: ExhibitSerializer[];
}
