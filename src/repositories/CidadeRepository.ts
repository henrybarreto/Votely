import Cidade from '../entity/Cidade'
import ICidadeRepository from './interface/ICidadeRepository'

import {dbGetManager} from '../config/db'

export default class CidadeRepository implements ICidadeRepository{
  constructor() {
  }
  public async create(nome: string): Promise<Cidade> {
    try {
      const manager = dbGetManager()
      const cidade = new Cidade()
      cidade.nome = nome
      manager.save(cidade)
      console.log(cidade)
      return cidade
    } catch(error) {
      console.error(error)
    }
  }
  public async read(nome: string): Promise<Cidade> {
    try {
      const manager = dbGetManager()
      const cidade: Cidade = await manager.findOne(Cidade, { where: {nome: nome}})
      console.log(cidade)
      return cidade
    } catch(error) {
      console.error(error)
    }
  }
  async update(nome: string, ...dadosParaAtualziar: any) {}
  async delete(nome: string) {}
}