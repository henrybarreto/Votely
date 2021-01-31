import ICidadeRepository from '../repositories/interface/ICidadeRepository'
import IController, { IPath } from './Controller'

export default class CidadeController implements IController { 
  public repository: ICidadeRepository
  constructor(repostory: ICidadeRepository) {
    this.repository = repostory

    this.create = this.create.bind(this)
    this.read = this.read.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }
  public async create(context: any) {
    try {
      console.log(context.state)
      const cidadeInfo = context.request.body
      const cidadeNome = cidadeInfo.nome
      const cidade = await this.repository.create(cidadeNome)

      context.body = cidade
    } catch (error) {
      console.error(error)
    }
  }
  public async read(context: any) {
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
  public async update(context: any) {}
  public async delete(context: any) {}
}