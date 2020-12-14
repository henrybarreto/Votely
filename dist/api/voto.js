"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const voto_1 = __importDefault(require("../controllers/voto"));
const voto_2 = __importDefault(require("../repositories/sequelize/voto"));
const router = new router_1.default();
const repository = new voto_2.default();
const controller = new voto_1.default(repository);
router.post('voto', controller.path.post, controller.create);
router.get('voto', controller.path.get, controller.read);
exports.default = router;
