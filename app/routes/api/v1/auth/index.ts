import Router from 'koa-router';

import * as Auth from '../../../../entities/auth';
import { authEmail } from '../../../../auth';
import * as validation from './validation';

import IContext from '../../../../interfaces/context';

const router = new Router({
  prefix: '/auth',
});

router
  .post('/login', authEmail, login)
  .post('/register', validation.onRegister, register)
  .post('/logout', logout);

async function login(ctx: IContext) {
  ctx.body = ctx.state.user;
}

async function register(ctx: IContext) {
  const user = await Auth.register(ctx.body);
  ctx.body = user;
  ctx.status = 200;
}

async function logout(ctx: IContext) {
  ctx.logout();
  ctx.status = 200;
}

export default router;
