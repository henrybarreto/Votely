import KoaRouter from '@koa/router'
import CandidatoController from '../controllers/CandidatoController'
import CandidatoRepository from "../repositories/CandidatoRepository";
import IController, { IPath } from '../controllers/Controller';
import ICandidatoRepository from '../repositories/interface/ICandidatoRepository';

const router = new KoaRouter()
const repository: ICandidatoRepository = new CandidatoRepository()
const path: IPath = {
  get: '/candidato/:cidade/:numero',
  post: '/candidato',
  put: '/candidato',
  delete: '/candidato/:candidato'
}
const controller: IController = new CandidatoController(repository)

router.post('candidato', path.post, controller.create)
router.get('candidato', path.get, controller.read)
router.put('candidato', path.put, controller.update)
router.delete('candidato', path.delete, controller.delete)

export default router;