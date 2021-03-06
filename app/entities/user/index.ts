import User, { UpdateData, GroupListData } from '../../models/user';

export const update = async (data: UpdateData, user: User): Promise<User> => {
  return await User.update(data, user);
};

export const getUserGroupList = async (data: GroupListData) => {
  return await User.getUserGroupList(data);
};

export const getUserByEmail = async (data: { email: string }): Promise<User> => {
  return await User.getUserByEmail(data);
};
