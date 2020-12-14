"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const candidato_1 = __importDefault(require("../../database/models/candidato"));
const cidade_1 = __importDefault(require("../../database/models/cidade"));
class VotoRepository {
    constructor() {
        this.candidatoModel = candidato_1.default;
        this.cidadeModel = cidade_1.default;
    }
    async create(numero, cidade) {
        const candidatoModel = await this.candidatoModel.findOne({
            where: {
                numero: numero,
            },
            include: [{
                    model: this.cidadeModel,
                    as: 'cidade'
                }]
        });
        const candidatoVoto = await candidatoModel.increment('votos', {});
        return candidatoVoto;
    }
    async read() {
    }
}
exports.default = VotoRepository;
