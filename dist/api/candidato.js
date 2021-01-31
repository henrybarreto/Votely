"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("@koa/router"));
var CandidatoController_1 = __importDefault(require("../controllers/CandidatoController"));
var CandidatoRepository_1 = __importDefault(require("../repositories/CandidatoRepository"));
var router = new router_1.default();
var repository = new CandidatoRepository_1.default();
var path = {
    get: '/candidato/:cidade/:numero',
    post: '/candidato',
    put: '/candidato',
    delete: '/candidato/:candidato'
};
var controller = new CandidatoController_1.default(repository);
router.post('candidato', path.post, controller.create);
router.get('candidato', path.get, controller.read);
router.put('candidato', path.put, controller.update);
router.delete('candidato', path.delete, controller.delete);
exports.default = router;
//# sourceMappingURL=candidato.js.map