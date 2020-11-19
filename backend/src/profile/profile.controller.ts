import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user-decorator';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { ExhibitSerializer } from '../entities/serializer/exhibit.serializer';
import { ProfileService } from './profile.service';

/**
 * 自分の登録してる作品情報やブース情報を扱うcontroller
 * 全てのルートで認証必須
 */
@ApiTags('profile')
@Controller('profile')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get('exhibit')
  @ApiResponse({
    status: 200,
    type: [ExhibitSerializer],
    description: '自身の作品情報を取得',
  })
  @ApiNoContentResponse({
    description: '作品情報が登録されていません',
  })
  async getExhibit(
    @GetUser() exhibitor: ExhibitorEntity,
  ): Promise<ExhibitSerializer> {
    const exhibit = await this.profileService.getExhibit(exhibitor.groupId);
    return exhibit.transformToSerializer();
  }
}
