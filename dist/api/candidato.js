"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const CandidatoController_1 = __importDefault(require("../controllers/CandidatoController"));
const CandidatoRepository_1 = __importDefault(require("../repositories/sequelize/CandidatoRepository"));
const router = new router_1.default();
const repository = new CandidatoRepository_1.default();
const controller = new CandidatoController_1.default(repository);
router.post('candidato', controller.path.post, controller.create);
router.get('candidato', controller.path.get, controller.read);
router.put('candidato', controller.path.put, controller.update);
router.delete('candidato', controller.path.delete, controller.delete);
exports.default = router;
