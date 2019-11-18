import Router from 'koa-router';

import * as User from '../../../../entities/user';
import { isAuthenticated } from '../../../../auth';
import * as validation from './validation';

import IContext from '../../../../interfaces/context';

const router = new Router({
  prefix: '/user',
});

router.post('/update', isAuthenticated, validation.onUpdate, update).get('/groups', getUsersGroups);

async function getUsersGroups(ctx: IContext) {
  const { user } = ctx.state;
  const groups = await User.getUserGroupList({
    userId: user.id,
    page: parseInt(ctx.request.query.page), // need add types
    pageSize: parseInt(ctx.request.query.pageSize), // need add types
  });

  ctx.body = groups;
}

async function update(ctx: IContext) {
  const { user } = ctx.state;
  const updatedUser = await User.update(ctx.request.body, user);

  ctx.body = updatedUser;
}

export default router;
