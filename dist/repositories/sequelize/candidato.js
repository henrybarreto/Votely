"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const candidato_1 = __importDefault(require("../../database/models/candidato"));
const cidade_1 = __importDefault(require("../../database/models/cidade"));
class CandidatoRepository {
    constructor() {
        this.candidatoModel = candidato_1.default;
        this.cidadeModel = cidade_1.default;
    }
    async create(numero, nome, cidade) {
        const cidadeModel = await this.cidadeModel.findOne({
            where: {
                nome: cidade
            }
        });
        const candidatoModel = await this.candidatoModel.create({
            numero: numero,
            nome: nome,
        });
        candidatoModel.setCidade(cidadeModel);
        return candidatoModel;
    }
    async read(numero, cidade) {
        const candidatoModel = await this.candidatoModel.findOne({
            where: {
                numero: numero,
            },
            include: [{
                    model: this.cidadeModel,
                    as: 'cidade',
                }]
        });
        return candidatoModel;
    }
    async update(numero, cidade, dadosParaAtualziar) {
        const candidatoModel = await this.read(numero, cidade);
        candidatoModel.numero = dadosParaAtualziar.numero;
        candidatoModel.nome = dadosParaAtualziar.nome;
        candidatoModel.cidade = dadosParaAtualziar.cidade;
        candidatoModel.save();
        return candidatoModel;
    }
}
exports.default = CandidatoRepository;
