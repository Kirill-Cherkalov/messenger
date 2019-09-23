import * as util from "util";
import * as winston from "winston";

const { createLogger, format, transports } = winston;
const { combine, printf, timestamp } = format;

export interface Log extends winston.LogEntry {
  stack?: string,
  timestamp?: string,
}

/**
 * Custom log format function
 *
 * @param {Log} log
 * @return {string}
 */
function customFormat(log: Log): string {
  const { level, message, stack, timestamp } = log;

  if (level === 'error') {
    return util.format('[%s] %s: %s\n%s', timestamp, level, message, stack);
  }

  return util.format('[%s] %s: %s', timestamp, level, message);
}

/**
 * @type {Logger}
 */
export const logger: winston.Logger = createLogger({
  format: combine(timestamp(), printf(customFormat)),
  transports: [
    new transports.Console()
  ],
});
