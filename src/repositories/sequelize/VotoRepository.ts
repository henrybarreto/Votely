import CandidatoModel from '../../models/sequelize/candidato'
import CidadeModel from '../../models/sequelize/cidade'
import IVotoRepository from '../interface/IVotoRepository'

export default class VotoRepository implements IVotoRepository{
  public candidatoModel: typeof CandidatoModel
  public cidadeModel: typeof CidadeModel
  constructor() {
    this.candidatoModel = CandidatoModel
    this.cidadeModel = CidadeModel
  }
  public async create(numero: number, cidade: string) {
    const candidatoModel: any = await this.candidatoModel.findOne({
      where: {
        numero: numero,
      },
      include: [{
        model: this.cidadeModel,
        as: 'cidade'
      }]
    })
    const candidatoVoto: any = await candidatoModel.increment('votos', {})

    return candidatoVoto
  }
  public async read() {
    
  }
}