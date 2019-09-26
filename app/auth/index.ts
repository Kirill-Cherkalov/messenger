import { Context } from 'koa';
import passport from 'koa-passport';
import compose from 'koa-compose';

import User from '../models/user';
import emailStrategy from './strategies/email';

passport.use('email', emailStrategy);

passport.serializeUser((user: User, done: Function) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done: Function) => {
  try {
    const user = await User.query().findById(id);

    if (!user) {
      return done(null, null);
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

export const authEmail = (ctx: Context, next) =>
  passport.authenticate('email', async (err, user, info) => {
    if (err) {
      throw new Error('');
    }

    if (user) {
      await ctx.login(user);
      await next();
    }

    if (info && info.message) {
    }
  })(ctx, next);

export const isAuthenticated = () => async (ctx: Context, next) => {
  if (!ctx.isAuthenticated()) {
    throw new Error('');
  }

  await next();
};

const auth = () => compose([passport.initialize()]);

export default auth;
