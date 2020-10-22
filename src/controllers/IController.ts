import { Context } from "koa";

export interface IPath {
  get?: string,
  post?: string,
  put?: string,
  delete?: string,
}

export default interface IController {
  path: IPath
  create?(context: Context): Promise<any>
  read?(context: Context): Promise<any>
  update?(context: Context): Promise<any>
  delete?(context: Context): Promise<any>
}