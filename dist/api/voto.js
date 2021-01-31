"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("@koa/router"));
var VotoController_1 = __importDefault(require("../controllers/VotoController"));
var VotoRepository_1 = __importDefault(require("../repositories/VotoRepository"));
var router = new router_1.default();
var repository = new VotoRepository_1.default();
var path = {
    get: '/voto/:cidade/:numero',
    post: '/voto',
};
var controller = new VotoController_1.default(repository);
router.post('voto', path.post, controller.create);
router.get('voto', path.get, controller.read);
exports.default = router;
//# sourceMappingURL=voto.js.map