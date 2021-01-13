import KoaRouter from '@koa/router'
import VotoController from '../controllers/VotoController'
import VotoRepository from '../repositories/sequelize/VotoRepository'
import IVotoController from '../controllers/VotoController'
import IVotoRepository from '../repositories/interface/IVotoRepository'
import { IPath } from '../controllers/Controller'

const router = new KoaRouter()
const repository: IVotoRepository = new VotoRepository()
const path: IPath = {
  get: '/voto/:cidade/:numero',
  post: '/voto',
}
const controller: IVotoController = new VotoController(repository)

router.post('voto', path.post, controller.create)
router.get('voto', path.get, controller.read)

export default router;