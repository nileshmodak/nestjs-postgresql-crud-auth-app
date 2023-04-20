import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateSignInDto } from '../dto/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(ValidationPipe)
    signIn(@Body() signInDto: CreateSignInDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
