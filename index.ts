import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyparser from 'koa-bodyparser';
import router from './api/api'

const app = new Koa();

app.use(logger());
app.use(json());
app.use(bodyparser());
app.use(router.routes());

app.listen(3001, () => {
  console.log('Server started')
})