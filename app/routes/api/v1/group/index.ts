import Router from 'koa-router';

import * as Group from '../../../../entities/group';
import * as UserGroup from '../../../../entities/userGroup';
import { isAuthenticated } from '../../../../auth';
import * as validation from './validation';

import IContext from '../../../../interfaces/context';
import { GroupType } from '../../../../models/group';

const router = new Router({
  prefix: '/group',
});

router
  .post('/join-to-group', isAuthenticated, validation.onJoin, joinToGroup)
  .post('/create', isAuthenticated, validation.onCreate, createGroup)
  .post('/create-direct', isAuthenticated, createDirect)
  .get('/list', isAuthenticated, getAllGroups);

async function getAllGroups(ctx: IContext) {
  const groups = await Group.getList();

  ctx.body = groups;
}

async function joinToGroup(ctx: IContext) {
  const { user } = ctx.state;
  const group = await UserGroup.joinToGroup({
    groupId: ctx.request.body.groupId,
    userId: user.id,
  });

  ctx.body = group;
}

async function createGroup(ctx: IContext) {
  const { user } = ctx.state;
  const group = await Group.create({
    name: ctx.request.body.name,
    userId: user.id,
    groupType: GroupType.chat,
  });

  ctx.body = group;
}

async function createDirect(ctx: IContext) {
  const { user } = ctx.state;
  const group = await Group.createDirectGroup({
    name: ctx.request.body.name,
    userId: user.id,
    friendEmail: ctx.request.body.friendEmail,
    groupType: GroupType.direct,
  });

  ctx.body = group;
}

export default router;
