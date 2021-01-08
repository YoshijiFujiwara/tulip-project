import { ApiProperty } from '@nestjs/swagger';

export class AccessLogSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  useragent: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  accessedAt: Date;
}
