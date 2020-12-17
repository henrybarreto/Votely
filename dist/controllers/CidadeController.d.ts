import ICidadeRepository from '../repositories/interface/ICidadeRepository';
import IController, { IPath } from './Controller';
export default class CidadeController implements IController {
    repository: ICidadeRepository;
    path: IPath;
    constructor(repostory: ICidadeRepository);
    create(context: any): Promise<void>;
    read(context: any): Promise<void>;
    update(context: any): Promise<void>;
    delete(context: any): Promise<void>;
}
