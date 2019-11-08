import Router from 'koa-router';

import auth from './api/v1/auth';
import user from './api/v1/user';
import group from './api/v1/group';

const routes = [auth, user, group];

const router = new Router({
  prefix: '/api/v1',
});

const api = () => {
  routes.forEach(route => {
    router.use(route.routes());
    router.use(route.allowedMethods());
  });

  return router;
};

export default api;
