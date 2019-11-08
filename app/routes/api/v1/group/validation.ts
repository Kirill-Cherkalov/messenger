import Joi from 'joi';
import { RouterContext } from 'koa-router';

const CreateSchema = {
  name: Joi.string()
    .regex(/^.{0,50}$/)
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
