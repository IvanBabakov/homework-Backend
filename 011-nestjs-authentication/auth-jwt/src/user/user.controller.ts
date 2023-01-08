import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';
import { CreateUserDto } from './interfaces/dto/create-user';
import { ParamId } from './interfaces/param-id';
import { UserDocument } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<UserDocument> {
    return this.userService.createUser(body);
  }

  @Get()
  public getUser(
    @Body() userName,
  ): QueryWithHelpers<
    HydratedDocument<UserDocument, object, object> | null,
    HydratedDocument<UserDocument, object, object>,
    object,
    UserDocument
  > {
    return this.userService.getUser(userName);
  }
}
