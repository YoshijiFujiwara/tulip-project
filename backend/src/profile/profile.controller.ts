import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GENRE } from 'src/entities/exhibit.entity';

/**
 * 自分の登録してる作品情報やブース情報を扱うcontroller
 * 全てのルートで認証必須
 */
@ApiTags('profile')
@Controller('profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProfileController {
  @Get('exhibit')
  async getExhibit() {
    return {
      id: 1,
      title: '作品1',
      description: 'hogehoge',
      thumbnail:
        'https://res.cloudinary.com/db32y726v/image/upload/v1596079557/vjzwcimeqkmtwj6fugbj.jpg',
      genre: GENRE.MUSIC,
      presentationImage:
        'https://res.cloudinary.com/db32y726v/image/upload/v1596079557/vjzwcimeqkmtwj6fugbj.jpg',
      groupId: 1,
      group: {
        id: 1,
        name: 'チーム1',
      },
    };
  }
}
