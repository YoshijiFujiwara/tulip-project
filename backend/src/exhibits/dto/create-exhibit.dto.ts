import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GENRE } from '../../entities/exhibit.entity';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsUrl,
  IsEnum,
  IsOptional,
  IsArray,
} from 'class-validator';
export class CreateExhibitDto {
  @ApiProperty({
    example: '文化祭から始まるVR生活',
    type: 'string',
    maxLength: 50,
  })
  @IsNotEmpty({ message: '作品タイトルの入力は必須です。' })
  @IsString({ message: '作品タイトルが正しくありません。' })
  @MaxLength(50, { message: '作品タイトルは最大で50字まで入力できます。' })
  title!: string;

  @ApiProperty({
    example:
      '次世代型の文化祭をVRで体験できるサービスです。オンラインでもリアルな交流を体験出来ます！',
    type: 'string',
    maxLength: 65535,
  })
  @IsNotEmpty({ message: '作品説明の入力は必須です。' })
  @IsString({ message: '作品説明が正しくありません。' })
  @MaxLength(65535, { message: '作品説明は最大で65535字まで入力できます。' })
  description!: string;

  @ApiProperty({
    example: 'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg',
    type: 'string',
  })
  @IsNotEmpty({ message: 'サムネイルの登録は必須です。' })
  @IsUrl()
  thumbnail!: string;

  @ApiProperty({
    example: GENRE.IT,
    type: 'enum',
    enum: GENRE,
  })
  @IsNotEmpty({ message: 'ジャンルの入力は必須です。' })
  @IsEnum(GENRE)
  genre!: GENRE;

  @ApiProperty({
    example: [
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD',
    ],
    type: [String],
  })
  @IsNotEmpty({ message: 'プレゼン用画像の登録は必須です。' })
  @IsArray({ message: 'プレゼン用画像のデータは配列でなければいけません。' })
  @IsUrl(
    {},
    {
      message: 'プレゼン用画像のデータはURLを含む配列でなければいけません。',
      each: true,
    },
  )
  presentationImages!: string[];

  @ApiPropertyOptional({
    example:
      'https://res.cloudinary.com/db32y726v/video/upload/v1609993587/kgzaddhq4nmtsnrnf1oc.mp4',
    type: 'string',
  })
  @IsOptional()
  @IsUrl()
  demo?: string;

  @ApiPropertyOptional({
    example:
      'https://poly.googleapis.com/downloads/fp/1608558449118091/9C-MLNfxaor/fgIw32pFZy_/model.gltf',
    type: 'string',
  })
  @IsOptional()
  @IsUrl()
  modelUrl?: string;
}
