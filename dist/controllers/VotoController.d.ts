import { Context } from 'koa';
import IVotoRepository from '../repositories/interface/IVotoRepository';
export default interface IVotoController {
    create(context: Context): Promise<any>;
    read(context: Context): Promise<any>;
}
export default class VotoController implements IVotoController {
    votoRepository: IVotoRepository;
    constructor(repository: IVotoRepository);
}
