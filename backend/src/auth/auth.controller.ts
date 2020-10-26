import {
  Body,
  Controller,
  HttpCode,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
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
    description: '出展者ログイン完了',
  })
  signIn(
    @Body(ValidationPipe) signInExhibitorDto: SignInExhibitorDto,
  ): Promise<AccessTokenSerializer> {
    return this.authService.signIn(signInExhibitorDto);
  }
}
