import { ApiProperty } from '@nestjs/swagger';

export class CountAccessLogDto {
  @ApiProperty({
    example: '山田太郎',
    type: String,
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    example: 'cute_penguin',
    type: String,
    nullable: true,
  })
  avatar?: string;
}
