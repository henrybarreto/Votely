import cidadeController from '../controllers/CidadeController'
import KoaRouter from '@koa/router'

const cidadeRouter = new KoaRouter()
const controller = new cidadeController()

cidadeRouter.post('cidade', controller.path.post, controller.create)
cidadeRouter.get('cidade', controller.path.get, controller.read)
cidadeRouter.put('cidade', controller.path.put, controller.update)
cidadeRouter.delete('cidade', controller.path.delete, controller.delete)

export default cidadeRouter;