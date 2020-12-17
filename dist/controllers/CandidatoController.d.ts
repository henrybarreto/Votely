import ICandidatoRepository from "../repositories/interface/ICandidatoRepository";
import IController, { IPath } from './Controller';
export default class CandidatoController implements IController {
    candidatoRepository: ICandidatoRepository;
    path: IPath;
    constructor(repository: ICandidatoRepository);
    create(context: any): Promise<void>;
    read(context: any): Promise<void>;
    update(context: any): Promise<void>;
    delete(context: any): Promise<void>;
}
