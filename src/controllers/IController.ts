export default interface IController {
  create(context: any): Promise<any>
  read(context: any): Promise<any>
  update(contex: any): Promise<any>
  delete(context: any): Promise<any>
}