import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateBoothDto {
  @ApiProperty({
    example: 8,
    type: 'number',
  })
  @IsNotEmpty({ message: 'ブース番号の入力は必須です。' })
  @IsNumber({}, { message: 'ブース番号が正しくありません。' })
  positionNumber: number;
}