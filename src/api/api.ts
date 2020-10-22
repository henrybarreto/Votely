import KoaRouter from '@koa/router'
import KoaJWT from 'koa-jwt'
import candidatoRouter from './candidato.api'
import cidadeRouter from './cidade.api'
import votoRouter from './voto.api'
import tokenRouter from './token.api'
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
