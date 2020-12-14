"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const cidade_1 = __importDefault(require("../controllers/cidade"));
const cidade_2 = __importDefault(require("../repositories/sequelize/cidade"));
const router = new router_1.default();
const repository = new cidade_2.default();
const controller = new cidade_1.default(repository);
router.post('cidade', controller.path.post, controller.create);
router.get('cidade', controller.path.get, controller.read);
router.put('cidade', controller.path.put, controller.update);
router.delete('cidade', controller.path.delete, controller.delete);
exports.default = router;
