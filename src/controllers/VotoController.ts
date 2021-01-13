import { Context } from 'koa'
import IVotoRepository from '../repositories/interface/IVotoRepository'

export default interface IVotoController {
  create(context: Context): Promise<any>
  read(context: Context): Promise<any>
} 

export default class VotoController implements IVotoController {
  //public path: IPath
  public votoRepository: IVotoRepository
  constructor(repository: IVotoRepository) {
    this.votoRepository = repository
    
    this.create = this.create.bind(this)
    this.read = this.read.bind(this)
  }
  public async create(context: Context) {
    const candidatoNumero = context.request.body.numero
    const candidatoCidade = context.request.body.cidade
    const candidato = await this.votoRepository.create(candidatoNumero, candidatoCidade)
    context.body = candidato
  }
  public async read(context: Context) {
    const candidato = context.request.body.candidato
    const cidade = context.request.body.cidade
  }
}