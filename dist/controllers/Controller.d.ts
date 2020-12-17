import { Context } from "koa";
export interface IPath {
    get?: any;
    post?: any;
    put?: any;
    delete?: any;
}
export default interface IController {
    path: IPath;
    create(context: Context): Promise<any>;
    read(context: Context): Promise<any>;
    update(context: Context): Promise<any>;
    delete(context: Context): Promise<any>;
}
