import Joi from 'joi';
import { RouterContext } from 'koa-router';
import { GroupType } from '../../../../models/group';

const CreateSchema = {
  name: Joi.string()
    .regex(/^.{0,50}$/)
    .required(),
  groupType: Joi.string()
    .valid([GroupType.chat, GroupType.direct])
    .required(),
};

const JoinSchema = {
  groupId: Joi.number().required(),
};

export const onCreate = async (ctx: RouterContext, next: () => Promise<any>) => {
  const { error } = Joi.validate(ctx.request.body, CreateSchema);

  if (error) {
    throw error;
  }

  await next();
};

export const onJoin = async (ctx: RouterContext, next: () => Promise<any>) => {
  const { error } = Joi.validate(ctx.request.body, JoinSchema);

  if (error) {
    throw error;
  }

  await next();
};
