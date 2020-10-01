import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';
import router from './api/api'

const app = new Koa();

app.use(logger());
app.use(json());
app.use(bodyparser());
app.use(router.routes());

app.listen(3001, () => {
  console.log('Server started')
})