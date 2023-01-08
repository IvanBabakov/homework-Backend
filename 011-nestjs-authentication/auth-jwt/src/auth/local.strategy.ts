/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStartegy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userName: string, pass: string): Promise<any> {
    const user = await this.authService.validateUser(userName, pass);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
