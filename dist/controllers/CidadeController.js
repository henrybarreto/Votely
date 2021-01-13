"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CidadeController {
    //public path: IPath
    constructor(repostory) {
        /*this.path = {
          get: '/cidade/:cidade',
          post: '/cidade',
          put: '/cidade/:cidade',
          delete: '/cidade/:cidade'
        }*/
        this.repository = repostory;
        this.create = this.create.bind(this);
        this.read = this.read.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    async create(context) {
        try {
            console.log(context.state);
            const cidadeInfo = context.request.body;
            const cidadeNome = cidadeInfo.nome;
            const cidade = await this.repository.create(cidadeNome);
            context.body = cidade;
        }
        catch (error) {
            console.error(error);
        }
    }
    async read(context) {
        try {
            const cidadeInfo = context.request.params;
            const cidadeNome = cidadeInfo.cidade;
            const cidade = await this.repository.read(cidadeNome);
            console.log(cidade);
            context.body = cidade;
        }
        catch (error) {
            console.error(error);
        }
    }
    async update(context) { }
    async delete(context) { }
}
exports.default = CidadeController;
