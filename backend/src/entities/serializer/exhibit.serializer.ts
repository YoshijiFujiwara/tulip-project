import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GENRE } from '../exhibit.entity';
import { GroupSerializer } from './group.serizlier';

export class ExhibitSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty({
    enum: GENRE,
  })
  genre!: GENRE;

  @ApiProperty()
  presentationImage: string;

  @ApiProperty()
  groupId: number;

  @ApiPropertyOptional({
    type: () => [GroupSerializer],
  })
  group: GroupSerializer;
}
