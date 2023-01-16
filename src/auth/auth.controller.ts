import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createuserDto: CreateUserDto): Promise<User> {
    return await this.authService.signUp(createuserDto);
  }
}
