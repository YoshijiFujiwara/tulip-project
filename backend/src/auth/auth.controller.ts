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
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';
import { AccessTokenSerializer } from './serializer/access-token.serializer';

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
  me() {
    return 'hogehoge';
  }
}
