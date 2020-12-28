import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ExhibitSerializer } from './exhibit.serializer';

export class PresentationImageSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  page: number;

  @ApiProperty()
  exhibitId: number;

  @ApiPropertyOptional({
    type: () => ExhibitSerializer,
  })
  exhibit?: ExhibitSerializer;
}
