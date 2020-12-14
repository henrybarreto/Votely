"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = new router_1.default();
router.get('/token', async (ctx) => {
    ctx.response.body = jsonwebtoken_1.default.sign({ user: process.env.USER }, `${process.env.JWT_SECRET}`, {
        expiresIn: '1h'
    });
});
exports.default = router;
