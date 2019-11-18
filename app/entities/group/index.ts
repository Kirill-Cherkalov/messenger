import Group, { createGroupData } from '../../models/group';
import UserGroup from '../../models/userGroup';
import { getUserByEmail } from '../user';

export const create = async (data: createGroupData): Promise<Group> => {
  const group = await Group.create(data);

  await UserGroup.joinToGroup({
    groupId: group.id,
    userId: data.userId,
  });

  return group;
};

export const createDirectGroup = async (data: createGroupData): Promise<Group> => {
  const group = await Group.create(data);

  await UserGroup.joinToGroup({
    groupId: group.id,
    userId: data.userId,
  });

  const user = await getUserByEmail({ email: data.friendEmail });

  await UserGroup.joinToGroup({
    groupId: group.id,
    userId: user.id,
  });

  return group;
};

export const getList = async (): Promise<Array<Group>> => {
  return await Group.getAll();
};
