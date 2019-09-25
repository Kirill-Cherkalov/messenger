import { STATUS_CODES } from 'http';
import { ValidationError as ValidationErrorObjection } from 'objection';
import { ValidationError as ValidationErrorJoi } from 'joi';
import * as logger from '../logger';
import { captureException } from '../sentry';

function joiErrorToData (error: ValidationErrorJoi) {
  const details = {};

  for (const item of error.details) {
    const path = item.path.join('.');
    details[path] = item.message;
  }

  return details;
}

export const errorCatchingMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof ValidationErrorObjection) {
      ctx.status = 400;
      ctx.body = error.data;
    } else if (error.details) { // For Joi error handling
      ctx.status = 400;
      ctx.body = joiErrorToData(error);
    } else {
      ctx.status = error.status || 500;
      ctx.body = STATUS_CODES[error.status];
    }

    ctx.app.emit('error', error, ctx);
  }
};

export const errorHandler = (error, ctx) => {
  if (ctx.status >= 500) {
    captureException(error);
  }

  logger.error(error);
};
