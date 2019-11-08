import Group, { createGroupData } from '../../models/group';

export const create = async (data: createGroupData): Promise<Group> => {
  return await Group.create(data);
};

export const getList = async (): Promise<Array<Group>> => {
  return await Group.getAll();
};
