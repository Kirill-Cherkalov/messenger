import Koa from 'koa';
import cors from '@koa/cors';
import json from 'koa-json';
import body from 'koa-bodyparser';
import logger from 'koa-logger';

const isDevelopment: boolean = process.env.NODE_ENV === 'development';

export default (app: Koa): void => {
  app.use(
    body({
      enableTypes: ['json', 'form', 'text'],
    }),
  );
  app.use(
    cors({
      credentials: true,
    }),
  );

  if (isDevelopment) {
    app.use(logger());
    app.use(json());
  }
};
