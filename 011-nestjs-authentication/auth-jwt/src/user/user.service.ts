import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose/dist';
import {
  Connection,
  HydratedDocument,
  Model,
  QueryWithHelpers,
} from 'mongoose';
import { CreateUserDto } from './interfaces/dto/create-user';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public createUser(data: CreateUserDto): Promise<UserDocument> {
    const user = new this.UserModel(data);
    return user.save();
  }

  public getUser(
    userName: string,
  ): QueryWithHelpers<
    HydratedDocument<UserDocument, object, object> | null,
    HydratedDocument<UserDocument, object, object>,
    object,
    UserDocument
  > {
    return this.UserModel.findOne({ firstName: userName });
  }
}
