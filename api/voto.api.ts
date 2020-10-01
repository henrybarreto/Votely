import votoController from '../controllers/VotoController'
import * as KoaRouter from '@koa/router'

const votoRouter = new KoaRouter()
const controller = new votoController()

votoRouter.post('voto', controller.path.post, controller.set)
votoRouter.get('voto', controller.path.get, controller.get)

export default votoRouter;