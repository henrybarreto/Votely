"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("@koa/router"));
var CidadeController_1 = __importDefault(require("../controllers/CidadeController"));
var CidadeRepository_1 = __importDefault(require("../repositories/CidadeRepository"));
var router = new router_1.default();
var repository = new CidadeRepository_1.default();
var path = {
    get: '/cidade/:cidade',
    post: '/cidade',
    put: '/cidade/:cidade',
    delete: '/cidade/:cidade'
};
var controller = new CidadeController_1.default(repository);
router.post('cidade', path.post, controller.create);
router.get('cidade', path.get, controller.read);
router.put('cidade', path.put, controller.update);
router.delete('cidade', path.delete, controller.delete);
exports.default = router;
//# sourceMappingURL=cidade.js.map