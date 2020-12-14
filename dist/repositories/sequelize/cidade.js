"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cidade_1 = __importDefault(require("../../database/models/cidade"));
class CidadeRepository {
    constructor() {
        this.cidadeModel = cidade_1.default;
    }
    async create(nome) {
        const cidade = this.cidadeModel.create({
            nome: nome
        });
        return cidade;
    }
    async read(nome) {
        const cidade = this.cidadeModel.findOne({
            where: {
                nome: nome
            }
        });
        return cidade;
    }
    async update(nome, ...dadosParaAtualziar) { }
    async delete(nome) { }
}
exports.default = CidadeRepository;
