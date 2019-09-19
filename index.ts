import './env';
import app from './app';
import connect from './app/db';

const PORT: number = Number(process.env.PORT) || 3000;

(async () => {
  try {
    await connect();
    console.log('DB connection successfully established.');
    app.listen(PORT, () => {
      console.log(`The app has been started on ${PORT} port.`);
    });
  } catch (error) {
    console.error(error);
  }
})();
