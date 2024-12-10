import { Controller } from '@nestjs/common';
import { SignInUserDto } from './dto/sign-in.dto';
import {} from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private authService: AppService) {}

  @MessagePattern({ cmd: 'signin' }) // messages with 'signin' key
  handleSignIn(@Payload() signInDto: SignInUserDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  // TODO: add signUp/signOut
}
