"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VotoController {
    constructor(repository) {
        this.path = {
            get: '/voto/:cidade/:numero',
            post: '/voto',
        };
        this.votoRepository = repository;
        this.create = this.create.bind(this);
        this.read = this.read.bind(this);
    }
    async create(context) {
        const candidatoNumero = context.request.body.numero;
        const candidatoCidade = context.request.body.cidade;
        const candidato = await this.votoRepository.create(candidatoNumero, candidatoCidade);
        context.body = candidato;
    }
    async read(context) {
        const candidato = context.request.body.candidato;
        const cidade = context.request.body.cidade;
    }
}
exports.default = VotoController;
