import ICandidatoRepository from "../repositories/interface/candidato";
import IController, { IPath } from './controller'

export default class CandidatoController implements IController {
  public candidatoRepository: ICandidatoRepository
  public path: IPath
  constructor(repository: ICandidatoRepository) {
    this.path = {
      get: '/candidato/:cidade/:numero',
      post: '/candidato',
      put: '/candidato',
      delete: '/candidato/:candidato'
    }
    this.candidatoRepository = repository

    this.create = this.create.bind(this)
    this.read = this.read.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }
  public async create(context: any) {
    try {
      const candidatoInfo = context.request.body
      const candidatoNumero = candidatoInfo.numero
      const candidatoNome = candidatoInfo.nome
      const candidatoCidade = candidatoInfo.cidade
      const candidato = await this.candidatoRepository.create(candidatoNumero, candidatoNome, candidatoCidade)
      console.log(candidato)
      context.body = candidato
    } catch(error) {
      console.error(error)
    }
  }
  public async read(context: any) {
    const candidatoInfo = context.request.params
    const candidatoNumero = candidatoInfo.numero
    const candidatoCidade = candidatoInfo.cidade
    const candidato = await this.candidatoRepository.read(candidatoNumero, candidatoCidade)
    context.body = candidato
  }
  public async update(context: any) {
    const candidatoInfo = context.request.body
    const candidatoNumero = candidatoInfo.numero
    const candidatoCidade = candidatoInfo.cidade
    const candidatoAtualiza = candidatoInfo.atualiza
    const candidato = await this.candidatoRepository.update(candidatoNumero, candidatoCidade, candidatoAtualiza)
    context.body = candidato
  }
  public async delete(context: any) {}
}