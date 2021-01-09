import { ApiProperty } from '@nestjs/swagger';

export class CountAccessLogBodyDto {
  @ApiProperty({
    example: '/honnban/booths/1',
    type: String,
  })
  url: string;
}
