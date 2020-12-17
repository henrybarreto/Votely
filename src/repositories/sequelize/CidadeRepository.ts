import CidadeModel from '../../models/sequelize/cidade'
import ICidadeRepository from '../interface/ICidadeRepository'

export default class CidadeRepository implements ICidadeRepository{
  public cidadeModel: typeof CidadeModel
  constructor() {
    this.cidadeModel = CidadeModel
  }
  public async create(nome: string) {
    const cidade = this.cidadeModel.create({
      nome: nome
    })
    return cidade
  }
  public async read(nome: string) {
    const cidade = this.cidadeModel.findOne({
      where: {
        nome: nome
      }
    })
    return cidade
  }
  async update(nome: string, ...dadosParaAtualziar: any) {}
  async delete(nome: string) {}
}