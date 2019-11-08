import { ValidationError } from 'objection';

import BaseModel from '../base';
import Password from '../../db/plugins/password';

export type RegisterData = {
  email: string;
  password: string;
  googleId: string;
};

export type UpdateData = {
  id: string;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
};

export default class User extends Password(BaseModel) {
  readonly id!: number;
  readonly google_id: number;
  readonly email!: string;
  readonly password: string;
  first_name: string;
  last_name: string;
  is_active: boolean;

  static timestamp = false;
  static tableName = 'users';
  static hidden = ['password', 'google_id'];

  static async create(data: RegisterData) {
    const user = await User.query().findOne({ email: data.email });

    if (user) {
      throw new ValidationError({
        data: {
          error: `User with email '${data.email}' already exists.`,
        },
        type: 'ModelValidation',
      });
    }

    return await User.query().insert({
      email: data.email,
      password: data.password,
    });
  }

  static async update(data: UpdateData, user: User) {
    return await User.query().patchAndFetchById(user.id, {
      first_name: data.firstName || user.first_name,
      last_name: data.lastName || user.last_name,
      is_active: data.isActive || user.is_active,
    });
  }
}
