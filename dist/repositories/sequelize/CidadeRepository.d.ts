import CidadeModel from '../../models/sequelize/cidade';
import ICidadeRepository from '../interface/ICidadeRepository';
export default class CidadeRepository implements ICidadeRepository {
    cidadeModel: typeof CidadeModel;
    constructor();
    create(nome: string): Promise<import("sequelize/types").Model<any, any>>;
    read(nome: string): Promise<import("sequelize/types").Model<any, any> | null>;
    update(nome: string, ...dadosParaAtualziar: any): Promise<void>;
    delete(nome: string): Promise<void>;
}
