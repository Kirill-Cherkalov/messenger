import Joi from 'joi';
import { RouterContext } from 'koa-router';

const UpdateSchema = {
  firstName: Joi.string().regex(/^.{0,50}$/),
  lastName: Joi.string().regex(/^.{0,50}$/),
  isActive: Joi.bool(),
};

export const onUpdate = async (ctx: RouterContext, next: () => Promise<any>) => {
  const { error } = Joi.validate(ctx.request.body, UpdateSchema);

  if (error) {
    throw error;
  }

  await next();
};
