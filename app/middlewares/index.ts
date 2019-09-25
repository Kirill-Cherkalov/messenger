import Koa from 'koa';
import cors from '@koa/cors';
import json from 'koa-json';
import body from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';

const isDevelopment: boolean = process.env.NODE_ENV === 'development';
const secret: string = process.env.APP_SECRET;
const maxAge: number = parseInt(process.env.SESSION_LIFETIME, 10);
const sessionIdKey = "sessionId";

export default (app: Koa): void => {
  app.keys = [secret];

  app.use(body({
    enableTypes: ['json', 'form', 'text'],
  }));

  app.use(cors({
    credentials: true,
  }));

  app.use(session({
    key: sessionIdKey,
    maxAge: maxAge,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
  }, app));

  if (isDevelopment) {
    app.use(logger());
    app.use(json());
  }
};
