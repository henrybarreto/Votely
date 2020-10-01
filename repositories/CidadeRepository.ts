import CidadeModel from '../orm/models/CidadeModel';

export default class CidadeRepository {
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
  update(nome: string, ...dadosParaAtualziar: any) {}
  delete(nome: string) {}
}