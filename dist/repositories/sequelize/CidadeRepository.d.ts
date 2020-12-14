import CidadeModel from '../../database/models/cidade';
import ICidadeRepository from '../ICidadeRepository';
export default class CidadeRepository implements ICidadeRepository {
    cidadeModel: typeof CidadeModel;
    constructor();
    create(nome: string): Promise<import("sequelize/types").Model<any, any>>;
    read(nome: string): Promise<import("sequelize/types").Model<any, any> | null>;
    update(nome: string, ...dadosParaAtualziar: any): Promise<void>;
    delete(nome: string): Promise<void>;
}
