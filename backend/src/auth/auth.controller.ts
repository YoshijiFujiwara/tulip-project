import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';
import { AccessTokenSerializer } from './serializer/access-token.serializer';
import { ExhibitorSerializer } from './serializer/exhibitor.serializer';
import { GetUser } from './get-user-decorator';
import { ExhibitorEntity } from '../entities/exhibitor.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign_in')
  @HttpCode(200)
  @ApiOkResponse({
    type: AccessTokenSerializer,
    description: '出展者ログイン完了',
  })
  @ApiUnauthorizedResponse({
    description: '学籍番号またはパスワードの不一致による出展者ログイン失敗',
  })
  signIn(
    @Body(ValidationPipe) signInExhibitorDto: SignInExhibitorDto,
  ): Promise<AccessTokenSerializer> {
    return this.authService.signIn(signInExhibitorDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: ExhibitorSerializer,
    description: 'ログイン展示者の情報を取得',
  })
  me(@GetUser() exhibitor: ExhibitorEntity): ExhibitorSerializer {
    return exhibitor.transformToSerializer();
  }
}
