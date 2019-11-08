import { ValidationError } from 'objection';

import BaseModel from '../base';

export type createGroupData = {
  name: string;
  userId: number;
};

export default class Group extends BaseModel {
  readonly id!: number;
  creator_id: number;
  name: string;

  static timestamp = false;
  static tableName = 'group';

  static async create(data: createGroupData) {
    const group = await Group.query().findOne({ name: data.name });

    if (group) {
      throw new ValidationError({
        data: {
          error: `Group with name '${data.name}' already exists.`,
        },
        type: 'ModelValidation',
      });
    }

    return await Group.query().insert({
      name: data.name,
      creator_id: data.userId,
    });
  }

  static async getAll() {
    return await Group.query();
  }
}
