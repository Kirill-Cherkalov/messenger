import User, { UpdateData, GroupListData } from '../../models/user';
import Group from '../../models/group';

export const update = async (data: UpdateData, user: User): Promise<User> => {
  return await User.update(data, user);
};

export const getUserGroupList = async (data: GroupListData) => {
  return await User.getUserGroupList(data);
};
