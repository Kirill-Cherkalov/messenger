import { Context } from 'koa';
import passport from 'koa-passport';
import compose from 'koa-compose';

import { User } from '../models/user';
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

export const authEmail = passport.authenticate('email');

export const isAuthenticated = async (ctx: Context, next) => {
  if (!ctx.isAuthenticated()) {
    ctx.throw(401);
  }

  await next();
};

const auth = () => compose([
  passport.initialize(),
  passport.session(),
]);

export default auth;
