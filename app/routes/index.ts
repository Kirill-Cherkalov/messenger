import Router from 'koa-router';

import auth from './api/v1/auth';
import user from './api/v1/user';

const routes = [auth, user];

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
