import * as logger from '../logger';
import { captureException } from '../sentry';

export const errorCatchingMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message;
    ctx.app.emit('error', error, ctx);
  }
};

export const errorHandler = (error, ctx) => {
  if (ctx.status >= 500) {
    captureException(error);
  }

  logger.error(error);
};
