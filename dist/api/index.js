"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("@koa/router"));
var koa_jwt_1 = __importDefault(require("koa-jwt"));
var candidato_1 = __importDefault(require("./candidato"));
var cidade_1 = __importDefault(require("./cidade"));
var voto_1 = __importDefault(require("./voto"));
var token_1 = __importDefault(require("./token"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var router = new router_1.default();
router.use(koa_jwt_1.default({
    secret: "" + process.env.JWT_SECRET,
}).unless({
    method: 'GET'
}));
router.use(candidato_1.default.routes());
router.use(cidade_1.default.routes());
router.use(voto_1.default.routes());
router.use(token_1.default.routes());
exports.default = router;
//# sourceMappingURL=index.js.map