import User, { UpdateData } from '../../models/user';

export const update = async (data: UpdateData, user: User): Promise<User> => {
  return await User.update(data, user);
};
