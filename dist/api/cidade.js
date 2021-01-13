"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const CidadeController_1 = __importDefault(require("../controllers/CidadeController"));
const CidadeRepository_1 = __importDefault(require("../repositories/sequelize/CidadeRepository"));
const router = new router_1.default();
const repository = new CidadeRepository_1.default();
const path = {
    get: '/cidade/:cidade',
    post: '/cidade',
    put: '/cidade/:cidade',
    delete: '/cidade/:cidade'
};
const controller = new CidadeController_1.default(repository);
router.post('cidade', path.post, controller.create);
router.get('cidade', path.get, controller.read);
router.put('cidade', path.put, controller.update);
router.delete('cidade', path.delete, controller.delete);
exports.default = router;
