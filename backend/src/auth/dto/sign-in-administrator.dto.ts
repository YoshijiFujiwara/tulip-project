import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInAdministratorDto {
  @ApiProperty({
    example: 'admin1',
    type: 'string',
    maxLength: 25,
  })
  @IsString({ message: 'ユーザー名が正しくありません。' })
  @MaxLength(25, { message: 'ユーザー名が正しくありません。' })
  @IsNotEmpty({ message: 'ユーザー名の入力は必須です。' })
  name: string;

  @ApiProperty({
    example: 'admin',
    type: 'string',
    minLength: 5,
    maxLength: 20,
  })
  @IsString({ message: 'パスワードが正しくありません。' })
  @MinLength(5, { message: 'パスワードが正しくありません。' })
  @MaxLength(20, { message: 'パスワードが正しくありません。' })
  @IsNotEmpty({ message: 'パスワードの入力は必須です。' })
  password: string;
}
