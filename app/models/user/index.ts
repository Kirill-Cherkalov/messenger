import BaseModel from '../base';

import Password from '../../db/plugins/password';

class User extends Password(BaseModel) {
  readonly id!: number;
  email!: string;
  password!: string;

  static timestamp = true;
  static tableName = 'users';
  static hidden = ['password'];
}

export default User;
