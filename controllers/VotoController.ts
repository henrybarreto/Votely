import votoRepository from "../repositories/VotoRepository"
import IVotoController from './IVotoController'

export default class VotoController implements IVotoController {
  public path
  public votoRepository
  constructor() {
    this.path = {
      get: '/voto/:cidade/:numero',
      post: '/voto',
    }
    this.votoRepository = new votoRepository()
    
    this.set = this.set.bind(this)
    this.get = this.get.bind(this)
  }
  public async set(context) {
    const candidatoNumero = context.request.body.numero
    const candidatoCidade = context.request.body.cidade
    const candidato = await this.votoRepository.create(candidatoNumero, candidatoCidade)
    context.body = candidato
  }
  async get(context) {
    const candidato = context.request.body.candidato
    const cidade = context.request.body.cidade
  }
}