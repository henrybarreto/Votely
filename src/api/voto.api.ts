import KoaRouter from '@koa/router'
import VotoController from '../controllers/VotoController'
import VotoRepository from '../repositories/sequelize/VotoRepository'
import IVotoController from '../controllers/IVotoController'
import IVotoRepository from '../repositories/IVotoRepository'

const router = new KoaRouter()
const repository: IVotoRepository = new VotoRepository()
const controller: IVotoController = new VotoController(repository)

router.post('voto', controller.path.post, controller.create)
router.get('voto', controller.path.get, controller.read)

export default router;