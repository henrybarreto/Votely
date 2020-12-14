import { Context } from "koa";
import IVotoRepository from "../repositories/interface/voto";
export interface IPath {
    get?: any;
    post?: any;
    put?: any;
    delete?: any;
}
export default interface IVotoController {
    path: IPath;
    create(context: Context): Promise<any>;
    read(context: Context): Promise<any>;
}
export default class VotoController implements IVotoController {
    path: IPath;
    votoRepository: IVotoRepository;
    constructor(repository: IVotoRepository);
}
