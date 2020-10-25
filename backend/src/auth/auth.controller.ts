import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign_in')
  @ApiOkResponse({
    description: '出展者ログイン完了',
  })
  signIn(@Body(ValidationPipe) signInExhibitorDto: SignInExhibitorDto) {
    return this.authService.signIn(signInExhibitorDto);
  }
}
