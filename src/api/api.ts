import KoaRouter from '@koa/router'
import candidatoRouter from './candidato.api'
import cidadeRouter from './cidade.api'
import votoRouter from './voto.api'

const router = new KoaRouter()
router.use(candidatoRouter.routes())
router.use(cidadeRouter.routes())
router.use(votoRouter.routes())

export default router
