import KoaRouter from '@koa/router'
import CandidatoController from '../controllers/CandidatoController'
import CandidatoRepository from "../repositories/sequelize/CandidatoRepository";
import IController from '../controllers/Controller';
import ICandidatoRepository from '../repositories/interface/ICandidatoRepository';

const router = new KoaRouter()
const repository: ICandidatoRepository = new CandidatoRepository()
const controller: IController = new CandidatoController(repository)

router.post('candidato', controller.path.post, controller.create)
router.get('candidato', controller.path.get, controller.read)
router.put('candidato', controller.path.put, controller.update)
router.delete('candidato', controller.path.delete, controller.delete)

export default router;