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
import { GetUser } from './get-user-decorator';
import { SignInAdministratorDto } from './dto/sign-in-administrator.dto';
import { UserSerializerType, UserEntityType } from '../entities/type/user.type';

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

  @Post('/admin/sign_in')
  @HttpCode(200)
  async singInAdmin(
    @Body(ValidationPipe) signInAdministratorDto: SignInAdministratorDto,
  ): Promise<AccessTokenSerializer> {
    return await this.authService.singInAdmin(signInAdministratorDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'ログインユーザー(出展者|管理者)の情報を取得',
  })
  me(@GetUser(['student', 'admin']) user: UserEntityType): UserSerializerType {
    return user.transformToSerializer();
  }
}
