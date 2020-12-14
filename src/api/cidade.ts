import KoaRouter from '@koa/router'
import CidadeController from '../controllers/cidade'
import CidadeRepository from "../repositories/sequelize/cidade";
import IController from '../controllers/controller';
import ICidadeRepository from '../repositories/interface/cidade';

const router = new KoaRouter()
const repository: ICidadeRepository = new CidadeRepository()
const controller: IController = new CidadeController(repository)

router.post('cidade', controller.path.post, controller.create)
router.get('cidade', controller.path.get, controller.read)
router.put('cidade', controller.path.put, controller.update)
router.delete('cidade', controller.path.delete, controller.delete)

export default router;