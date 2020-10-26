import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInExhibitorDto {
  @ApiProperty({
    example: 'ohs12345',
    type: 'string',
    minLength: 8,
    maxLength: 8,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(8)
  @IsNotEmpty({ message: '学籍番号の入力は必須です。' })
  studentNumber: string;

  @ApiProperty({
    example: 'hogeho',
    type: 'string',
    minLength: 6,
    maxLength: 20,
  })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty({ message: 'パスワードの入力は必須です。' })
  password: string;
}
