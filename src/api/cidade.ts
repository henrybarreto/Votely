import KoaRouter from '@koa/router'
import CidadeController from '../controllers/CidadeController'
import CidadeRepository from "../repositories/sequelize/CidadeRepository";
import IController, { IPath } from '../controllers/Controller';
import ICidadeRepository from '../repositories/interface/ICidadeRepository';

const router = new KoaRouter()
const repository: ICidadeRepository = new CidadeRepository()
const path: IPath = {
  get: '/cidade/:cidade',
  post: '/cidade',
  put: '/cidade/:cidade',
  delete: '/cidade/:cidade'
}
const controller: IController = new CidadeController(repository)

router.post('cidade', path.post, controller.create)
router.get('cidade', path.get, controller.read)
router.put('cidade', path.put, controller.update)
router.delete('cidade', path.delete, controller.delete)

export default router;