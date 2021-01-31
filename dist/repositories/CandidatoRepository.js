"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Candidato_1 = __importDefault(require("../entity/Candidato"));
var Cidade_1 = __importDefault(require("../entity/Cidade"));
var db_1 = require("../config/db");
var CandidatoRepository = /** @class */ (function () {
    function CandidatoRepository() {
    }
    CandidatoRepository.prototype.create = function (numero, nome, cidade) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, candidato, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        manager = db_1.dbGetManager();
                        candidato = new Candidato_1.default();
                        candidato.numero = numero;
                        candidato.nome = nome;
                        _a = candidato;
                        return [4 /*yield*/, manager.findOne(Cidade_1.default, { where: { nome: cidade } })];
                    case 1:
                        _a.cidade = _b.sent();
                        manager.save(candidato);
                        console.log(candidato);
                        return [2 /*return*/, candidato];
                    case 2:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CandidatoRepository.prototype.read = function (numero, cidadeNome) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, cidade, candidato, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        manager = db_1.dbGetManager();
                        return [4 /*yield*/, manager.findOne(Cidade_1.default, { where: { nome: cidadeNome } })];
                    case 1:
                        cidade = _a.sent();
                        console.log(cidade);
                        return [4 /*yield*/, manager.findOne(Candidato_1.default, {
                                where: {
                                    numero: numero,
                                    cidade: cidade
                                }
                            })];
                    case 2:
                        candidato = _a.sent();
                        console.log(candidato);
                        return [2 /*return*/, candidato];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CandidatoRepository.prototype.update = function (numero, cidade, dadosParaAtualziar) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CandidatoRepository.prototype.delete = function (numero) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return CandidatoRepository;
}());
exports.default = CandidatoRepository;
//# sourceMappingURL=CandidatoRepository.js.map