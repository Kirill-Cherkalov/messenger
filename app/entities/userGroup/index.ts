import UserGroup, { JoinData } from '../../models/userGroup';

export const joinToGroup = async (data: JoinData): Promise<UserGroup> => {
  return await UserGroup.joinToGroup(data);
};
