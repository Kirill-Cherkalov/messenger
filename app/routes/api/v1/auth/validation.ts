import Joi from 'joi';
import { RouterContext } from 'koa-router';

const RegistrationSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^.{8,30}$/).required(),
};

export const onRegister = async (ctx: RouterContext, next: () => Promise<any>) => {
  const { error } = Joi.validate(ctx.request.body, RegistrationSchema);

  if (error) {
    throw error;
  }

  await next();
};
