import { ValidationError } from "objection";
import BaseModel from '../base';
import Password from '../../db/plugins/password';

export type RegisterData = {
  email: string,
  password: string,
}

export default class User extends Password(BaseModel) {
  readonly id!: number;
  email!: string;
  password!: string;

  static timestamp = true;
  static tableName = 'users';
  static hidden = ['password'];

  static async create (data: RegisterData) {
    const user = await User.query().findOne({ email: data.email });

    if (user) {
      throw new ValidationError({
        data: {
          email: `User with email '${data.email}' already exists.`
        },
        type: 'ModelValidation',
      });
    }

    return await User.query().insert({
      email: data.email,
      password: data.password,
    });
  }
}
