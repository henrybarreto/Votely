export default interface IController {
  create(context): Promise<any>
  read(context): Promise<any>
  update(contex): Promise<any>
  delete(context): Promise<any>
}