import ICandidatoRepository from '../ICandidatoRepository';
export default class CandidatoRepository implements ICandidatoRepository {
    candidatoModel: any;
    cidadeModel: any;
    constructor();
    create(numero: number, nome: string, cidade: string): Promise<any>;
    read(numero: number, cidade: string): Promise<any>;
    update(numero: number, cidade: string, dadosParaAtualziar: any): Promise<any>;
}
