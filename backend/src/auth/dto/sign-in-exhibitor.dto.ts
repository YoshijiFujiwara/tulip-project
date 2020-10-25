import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInExhibitorDto {
  @IsString()
  @MinLength(8)
  @MaxLength(8)
  @IsNotEmpty({ message: '学籍番号の入力は必須です。' })
  studentNumebr: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty({ message: 'パスワードの入力は必須です。' })
  password: string;
}
