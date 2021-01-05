import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class UpdateEventDto {
  @ApiProperty({
    example: new Date(2021, 2, 12, 9, 0),
    type: Date,
  })
  @IsNotEmpty({ message: '開始日時の入力は必須です。' })
  @IsDateString({ message: '開始日時が正しくありません。' })
  startAt: Date;

  @ApiProperty({
    example: new Date(2021, 2, 12, 18, 0),
    type: Date,
  })
  @IsNotEmpty({ message: '終了日時の入力は必須です。' })
  @IsDateString({ message: '終了日時が正しくありません。' })
  endAt: Date;
}
