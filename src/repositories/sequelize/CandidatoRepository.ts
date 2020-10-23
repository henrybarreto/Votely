import CandidatoModel from '../../database/sequelize/models/CandidatoModel'
import CidadeModel from '../../database/sequelize/models/CidadeModel'
import ICandidatoRepository from '../ICandidatoRepository'

export default class CandidatoRepository implements ICandidatoRepository{
  public candidatoModel: any
  public cidadeModel: any
  constructor() {
    this.candidatoModel = CandidatoModel
    this.cidadeModel = CidadeModel
  }
  public async create(numero: number, nome: string, cidade: string) {
    const cidadeModel = await this.cidadeModel.findOne({
      where: {
        nome: cidade
      }
    })
    const candidatoModel = await this.candidatoModel.create({
      numero: numero,
      nome: nome,
    })
    candidatoModel.setCidade(cidadeModel)
    return candidatoModel
  }
  public async read(numero: number, cidade: string) {
    const candidatoModel = await this.candidatoModel.findOne({
      where: {
        numero: numero,
      },
      include: [{
        model: this.cidadeModel,
        as: 'cidade',
      }]
    })
    return candidatoModel
  }
  public async update(numero: number, cidade: string, dadosParaAtualziar: any) {
    const candidatoModel = await this.read(numero, cidade)
    candidatoModel.numero = dadosParaAtualziar.numero
    candidatoModel.nome = dadosParaAtualziar.nome
    candidatoModel.cidade = dadosParaAtualziar.cidade
    candidatoModel.save()
    return candidatoModel
  }
  // delete(numero: number) {}
}