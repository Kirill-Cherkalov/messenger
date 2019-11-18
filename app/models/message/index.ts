import { ValidationError, Model } from 'objection';

import BaseModel from '../base';

export type CreateData = {
  messageBody: string;
  userId: number;
};

export default class Message extends BaseModel {
  readonly id!: number;
  creator_id: number;
  parent_message_id: number;
  reminder_frequency_id: number;
  message_body: string;
  subject: string;
  is_reminder: boolean;
  next_remind_date: Date;

  static timestamp = false;
  static tableName = 'message';

  static async create(data: CreateData) {
    return await Message.query().insert({
      message_body: data.messageBody,
      creator_id: data.userId,
    });
  }
}
