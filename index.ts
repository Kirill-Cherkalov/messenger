import './env';
import app from './app';
import connect from './app/db';
import * as logger from './app/services/logger';

const PORT: number = Number(process.env.PORT) || 3000;

(async () => {
  try {
    await connect();
    logger.info('DB connection successfully established.');
    app.listen(PORT, () => {
      logger.info(`The app has been started on ${PORT} port.`);
    });
  } catch (error) {
    logger.error(error);
  }
})();
