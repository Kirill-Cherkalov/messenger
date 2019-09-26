import * as Sentry from '@sentry/node';

const { SENTRY_PUBLIC_DSN } = process.env;

Sentry.init({ dsn: SENTRY_PUBLIC_DSN });

export function captureException(error: Error) {
  Sentry.captureException(error);
}
