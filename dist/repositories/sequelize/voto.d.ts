import CandidatoModel from '../../database/models/candidato';
import CidadeModel from '../../database/models/cidade';
import IVotoRepository from '../interface/voto';
export default class VotoRepository implements IVotoRepository {
    candidatoModel: typeof CandidatoModel;
    cidadeModel: typeof CidadeModel;
    constructor();
    create(numero: number, cidade: string): Promise<any>;
    read(): Promise<void>;
}
