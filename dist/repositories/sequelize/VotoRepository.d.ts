import CandidatoModel from '../../models/sequelize/candidato';
import CidadeModel from '../../models/sequelize/cidade';
import IVotoRepository from '../interface/IVotoRepository';
export default class VotoRepository implements IVotoRepository {
    candidatoModel: typeof CandidatoModel;
    cidadeModel: typeof CidadeModel;
    constructor();
    create(numero: number, cidade: string): Promise<any>;
    read(): Promise<void>;
}
