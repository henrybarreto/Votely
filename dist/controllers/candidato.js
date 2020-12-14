"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CandidatoController {
    constructor(repository) {
        this.path = {
            get: '/candidato/:cidade/:numero',
            post: '/candidato',
            put: '/candidato',
            delete: '/candidato/:candidato'
        };
        this.candidatoRepository = repository;
        this.create = this.create.bind(this);
        this.read = this.read.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    async create(context) {
        try {
            const candidatoInfo = context.request.body;
            const candidatoNumero = candidatoInfo.numero;
            const candidatoNome = candidatoInfo.nome;
            const candidatoCidade = candidatoInfo.cidade;
            const candidato = await this.candidatoRepository.create(candidatoNumero, candidatoNome, candidatoCidade);
            console.log(candidato);
            context.body = candidato;
        }
        catch (error) {
            console.error(error);
        }
    }
    async read(context) {
        const candidatoInfo = context.request.params;
        const candidatoNumero = candidatoInfo.numero;
        const candidatoCidade = candidatoInfo.cidade;
        const candidato = await this.candidatoRepository.read(candidatoNumero, candidatoCidade);
        context.body = candidato;
    }
    async update(context) {
        const candidatoInfo = context.request.body;
        const candidatoNumero = candidatoInfo.numero;
        const candidatoCidade = candidatoInfo.cidade;
        const candidatoAtualiza = candidatoInfo.atualiza;
        const candidato = await this.candidatoRepository.update(candidatoNumero, candidatoCidade, candidatoAtualiza);
        context.body = candidato;
    }
    async delete(context) { }
}
exports.default = CandidatoController;
