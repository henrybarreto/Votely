"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const candidato_1 = __importDefault(require("./candidato"));
const cidade_1 = __importDefault(require("./cidade"));
const voto_1 = __importDefault(require("./voto"));
const token_1 = __importDefault(require("./token"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = new router_1.default();
router.use(koa_jwt_1.default({
    secret: `${process.env.JWT_SECRET}`,
}).unless({
    method: 'GET'
}));
router.use(candidato_1.default.routes());
router.use(cidade_1.default.routes());
router.use(voto_1.default.routes());
router.use(token_1.default.routes());
exports.default = router;
