import KoaRouter from '@koa/router'
import VotoController from '../controllers/voto'
import VotoRepository from '../repositories/sequelize/voto'
import IVotoController from '../controllers/voto'
import IVotoRepository from '../repositories/interface/voto'

const router = new KoaRouter()
const repository: IVotoRepository = new VotoRepository()
const controller: IVotoController = new VotoController(repository)

router.post('voto', controller.path.post, controller.create)
router.get('voto', controller.path.get, controller.read)

export default router;