import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';
import router from './api'
import dotenv from 'dotenv'

const app = new Koa();
dotenv.config();

app.use(logger());
app.use(json());
app.use(bodyparser());
app.use(router.routes());

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started')
})