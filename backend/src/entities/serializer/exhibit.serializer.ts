import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GENRE } from '../exhibit.entity';
import { GroupSerializer } from './group.serizlier';
import { BoothSerializer } from './booth.serializer';
import { PresentationImageSerializer } from './presentationImage.serializer';

export class ExhibitSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  viewsCount: number;

  @ApiProperty()
  goodCount: number;

  @ApiPropertyOptional()
  demo: string;

  @ApiProperty({
    enum: GENRE,
  })
  genre!: GENRE;

  @ApiProperty()
  groupId: number;

  @ApiPropertyOptional({
    type: () => [GroupSerializer],
  })
  group: GroupSerializer;

  @ApiPropertyOptional({
    type: BoothSerializer,
  })
  booth: BoothSerializer;

  @ApiPropertyOptional({
    type: () => [PresentationImageSerializer],
  })
  presentationImages?: PresentationImageSerializer[];
}
