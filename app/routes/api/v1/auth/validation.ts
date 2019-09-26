import Joi from 'joi';
import { RouterContext } from 'koa-router';

const RegistrationSchema = {};

export const onRegister = async (ctx: RouterContext, next: () => Promise<any>) => {
  const { error } = Joi.validate(ctx.body, RegistrationSchema);

  if (error) {
  }

  await next();
};
