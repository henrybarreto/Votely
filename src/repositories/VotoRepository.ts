import CandidatoModel from '../orm/models/CandidatoModel'
import CidadeModel from '../orm/models/CidadeModel'

export default class votoRepository {
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