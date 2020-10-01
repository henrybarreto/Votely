import { Context } from "koa";

export default interface IVotoController {
  set(context: Context): Promise<any>
  get(context: Context): Promise<any>
}