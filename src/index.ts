import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyparser from 'koa-bodyparser';
import router from './api'
import {dbInit} from './config/db'

import dotenv from 'dotenv'
dotenv.config();

const app = new Koa();

app.use(logger());
app.use(json());
app.use(bodyparser());
app.use(router.routes());

app.listen(process.env.PORT || 3000, async () => {
  try {
    console.log('Server started')
    await dbInit()
    console.log('TypeORM connection has done!')
  } catch(error) {
    console.error(error)
  }
})
