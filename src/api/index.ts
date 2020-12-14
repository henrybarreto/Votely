import KoaRouter from '@koa/router'
import KoaJWT from 'koa-jwt'
import candidatoRouter from './candidato'
import cidadeRouter from './cidade'
import votoRouter from './voto'
import tokenRouter from './token'
import dotenv from 'dotenv'

dotenv.config()

const router = new KoaRouter()

router.use(KoaJWT({
  secret: `${process.env.JWT_SECRET}`,
}).unless({
    method: 'GET'
  }
))

router.use(candidatoRouter.routes())
router.use(cidadeRouter.routes())
router.use(votoRouter.routes())
router.use(tokenRouter.routes())

export default router
