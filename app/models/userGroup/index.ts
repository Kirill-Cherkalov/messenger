import { ValidationError } from 'objection';

import BaseModel from '../base';

export type JoinData = {
  userId: number;
  groupId: number;
};

export default class UserGroup extends BaseModel {
  readonly id!: number;
  user_id: number;
  group_id: number;
  is_active: boolean;

  static timestamp = false;
  static tableName = 'user_group';

  static async joinToGroup(data: JoinData) {
    const user = await UserGroup.query().findOne({
      user_id: data.userId,
      group_id: data.groupId,
    });

    if (user) {
      throw new ValidationError({
        data: {
          error: `User with id '${data.userId}' already joined to group ${data.groupId}.`,
        },
        type: 'ModelValidation',
      });
    }

    return await UserGroup.query().insert({
      user_id: data.userId,
      group_id: data.groupId,
    });
  }
}
