"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const api_1 = __importDefault(require("./api"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = new koa_1.default();
dotenv_1.default.config();
app.use(koa_logger_1.default());
app.use(koa_json_1.default());
app.use(koa_bodyparser_1.default());
app.use(api_1.default.routes());
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
