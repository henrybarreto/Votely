"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const VotoController_1 = __importDefault(require("../controllers/VotoController"));
const VotoRepository_1 = __importDefault(require("../repositories/sequelize/VotoRepository"));
const router = new router_1.default();
const repository = new VotoRepository_1.default();
const controller = new VotoController_1.default(repository);
router.post('voto', controller.path.post, controller.create);
router.get('voto', controller.path.get, controller.read);
exports.default = router;
