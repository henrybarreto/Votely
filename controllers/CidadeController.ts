import CidadeRepository from "../repositories/CidadeRepository";
import IController from './IController'

export default class CidadeController implements IController { 
  public repository: CidadeRepository
  public path

  constructor() {
    this.path = {
      get: '/cidade/:cidade',
      post: '/cidade',
      put: '/cidade/:cidade',
      delete: '/cidade/:cidade'
    }
    this.repository = new CidadeRepository()

    this.create = this.create.bind(this)
    this.read = this.read.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }
  public async create(context) {
    try {
      const cidadeInfo = context.request.body
      const cidadeNome = cidadeInfo.nome
      const cidade = await this.repository.create(cidadeNome)

      context.body = cidade
    } catch (error) {
      console.error(error)
    }
  }
  public async read(context) {
    try {
      const cidadeInfo = context.request.params
      const cidadeNome = cidadeInfo.cidade
      const cidade = await this.repository.read(cidadeNome)
      console.log(cidade)
      context.body = cidade
      
    } catch (error) { 
      console.error(error)
    }

  }
  public async update(context) {}
  public async delete(context) {}
}