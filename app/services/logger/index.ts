import * as util from 'util';
import * as winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, printf, timestamp } = format;

export interface Log extends winston.LogEntry {
  stack?: string;
  timestamp?: string;
}

type Loggable = Log | Error | string;

function customFormat(log: Log): string {
  const { level, message, stack, timestamp } = log;

  if (level === 'error') {
    return util.format('[%s] %s: %s\n%s', timestamp, level, message, stack);
  }

  return util.format('[%s] %s: %s', timestamp, level, message);
}

export const logger: winston.Logger = createLogger({
  format: combine(timestamp(), printf(customFormat)),
  transports: [new transports.Console()],
});

function bind(level: string) {
  return (loggable: Loggable) => {
    if (loggable instanceof Error) {
      return logger.log({ level, message: loggable.message, stack: loggable.stack });
    }

    if (typeof loggable === 'string') {
      return logger.log({ level, message: loggable });
    }

    return logger.log({ level, ...loggable });
  };
}

export const error = bind('error');
export const warn = bind('warn');
export const info = bind('info');
export const http = bind('http');
export const verbose = bind('verbose');
export const debug = bind('debug');
export const silly = bind('silly');
