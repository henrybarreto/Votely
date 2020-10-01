import CandidatoController from '../controllers/CandidatoController'
import CandidatoRepository from "../repositories/CandidatoRepository";
import KoaRouter from '@koa/router'

const candidatoRouter = new KoaRouter()
const controller = new CandidatoController(new CandidatoRepository())

candidatoRouter.post('candidato', controller.path.post, controller.create)
candidatoRouter.get('candidato', controller.path.get, controller.read)
candidatoRouter.put('candidato', controller.path.put, controller.update)
candidatoRouter.delete('candidato', controller.path.delete, controller.delete)

export default candidatoRouter;