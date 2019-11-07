import Router from 'koa-router';

import * as Auth from '../../../../entities/user';
import { isAuthenticated } from '../../../../auth';
import * as validation from './validation';

import IContext from '../../../../interfaces/context';

const router = new Router({
  prefix: '/user',
});

router.post('/update', isAuthenticated, update);

async function update(ctx: IContext) {
  const { user } = ctx.state;
  const updatedUser = await Auth.update(ctx.request.body, user);

  ctx.body = updatedUser;
}

export default router;
