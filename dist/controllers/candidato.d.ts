import ICandidatoRepository from "../repositories/interface/candidato";
import IController, { IPath } from './controller';
export default class CandidatoController implements IController {
    candidatoRepository: ICandidatoRepository;
    path: IPath;
    constructor(repository: ICandidatoRepository);
    create(context: any): Promise<void>;
    read(context: any): Promise<void>;
    update(context: any): Promise<void>;
    delete(context: any): Promise<void>;
}
