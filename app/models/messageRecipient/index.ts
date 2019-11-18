import { ValidationError, Model } from 'objection';

import BaseModel from '../base';

export type CreateData = {
  recipientId?: number;
  messageId: number;
  recipientGroupId?: number;
};

export default class MessageRecipient extends BaseModel {
  readonly id!: number;
  recipient_id: number;
  message_id: number;
  recipient_group_id: number;
  is_read: boolean;

  static tableName = 'message';

  // static get relationMappings() {
  //   return {
  //     users: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: `${__dirname}/../user`,
  //       join: {
  //         from: 'user_group.userId',
  //         to: 'users.id',
  //       },
  //     },
  //     group: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: `${__dirname}/../group`,
  //       join: {
  //         from: 'user_group.group_id',
  //         to: 'group.id',
  //       },
  //     },
  //   };
  // }

  static async create(data: CreateData) {
    return await MessageRecipient.query().insert({
      recipient_id: data.recipientId || null,
      message_id: data.messageId,
      recipient_group_id: data.recipientGroupId || null,
    });
  }
}
