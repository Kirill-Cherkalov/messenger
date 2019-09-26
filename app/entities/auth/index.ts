import User, { RegisterData } from '../../models/user';

export const register = async (data: RegisterData): Promise<User> => {
  return await User.create(data);
};
