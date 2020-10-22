import { Context } from 'koa'
import KoaRouter from '@koa/router'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const router = new KoaRouter()

router.get('/token', async (ctx: Context) => {
  ctx.response.body = jwt.sign(
    {user: process.env.USER}, `${process.env.JWT_SECRET}`, {
    expiresIn: '1h'
  })
})

export default router