import CandidatoModel from '../../database/sequelize/models/CandidatoModel'
import CidadeModel from '../../database/sequelize/models/CidadeModel'
import IVotoRepository from '../IVotoRepository'

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