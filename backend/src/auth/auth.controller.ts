import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInExhibitorDto } from './dto/sign-in-exhibitor.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign_in')
  signIn(@Body(ValidationPipe) signInExhibitorDto: SignInExhibitorDto) {
    return this.authService.signIn(signInExhibitorDto);
  }
}
