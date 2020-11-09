import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GENRE } from '../../entities/exhibit.entity';
import { GroupSerializer } from '../../entities/serializer/group.serizlier';

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
