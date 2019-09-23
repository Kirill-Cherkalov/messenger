import Koa from 'koa';

import auth from './auth';
import routes from './routes';
import middlewares from './middlewares';
import { errorCatchingMiddleware, errorHandler } from './services/error';

const app = new Koa();
const api = routes();

middlewares(app);

app.use(errorCatchingMiddleware);
app.use(auth());
app.use(api.routes());
app.use(api.allowedMethods());

app.on('error', errorHandler);

export default app;
