import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInExhibitorDto {
  @ApiProperty({
    example: 'ohs12345',
    type: 'string',
    minLength: 8,
    maxLength: 8,
  })
  @IsString({ message: '学籍番号が正しくありません。' })
  @MinLength(8, { message: '学籍番号が正しくありません。' })
  @MaxLength(8, { message: '学籍番号が正しくありません。' })
  @IsNotEmpty({ message: '学籍番号の入力は必須です。' })
  studentNumber: string;

  @ApiProperty({
    example: 'hogeho',
    type: 'string',
    minLength: 6,
    maxLength: 20,
  })
  @IsString({ message: 'パスワードが正しくありません。' })
  @MinLength(6, { message: 'パスワードが正しくありません。' })
  @MaxLength(20, { message: 'パスワードが正しくありません。' })
  @IsNotEmpty({ message: 'パスワードの入力は必須です。' })
  password: string;
}
