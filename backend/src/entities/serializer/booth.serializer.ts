import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExhibitSerializer } from './exhibit.serializer';

export class BoothSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  positionNumber: number;

  @ApiProperty()
  exhibitId: number;

  @ApiPropertyOptional({
    type: () => ExhibitSerializer,
  })
  exhibit: ExhibitSerializer;
}
