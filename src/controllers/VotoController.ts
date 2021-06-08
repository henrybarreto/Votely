import { Context } from 'koa'
import IVotoRepository from '../repositories/interface/IVotoRepository'
import IController from "./Controller";

export default class VotoController implements IController {
  public votoRepository: IVotoRepository
  constructor(repository: IVotoRepository) {
    this.votoRepository = repository
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

  delete(context: Context): Promise<any> {
    return Promise.resolve(undefined);
  }

  update(context: Context): Promise<any> {
    return Promise.resolve(undefined);
  }
}