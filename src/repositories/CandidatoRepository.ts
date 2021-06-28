import Candidato from '../entity/Candidato'
import Cidade from '../entity/Cidade'
import ICandidatoRepository from './interface/ICandidatoRepository'
import { dbGetManager } from '../config/db'

export default class CandidatoRepository implements ICandidatoRepository{
  constructor() {
  }
  public async create(numero: number, nome: string, cidade: string) {
    try {
      const manager = dbGetManager()
      const candidato = new Candidato()
      candidato.numero = numero
      candidato.nome = nome
      candidato.cidade = await manager.findOne(Cidade, {where: {nome: cidade}})
      await manager.save(candidato)
      console.log(candidato)
      return candidato
    } catch(error) {
      console.error(error)
    }
  }
  public async read(numero: number, cidadeNome: string) {
    try {
      const manager = dbGetManager()
      const cidade: Cidade = await manager.findOne(Cidade, {where: {nome: cidadeNome}})
      console.log(cidade)
      const candidato: Candidato = await manager.findOne(
        Candidato,
        {
          where: {
            numero: numero,
            cidade: cidade
          }
        }
      )
      console.log(candidato)
      return candidato
    } catch (error) {
      console.error(error)
    }

  }
  public async update(numero: number, cidade: string, dadosParaAtualziar: any) {
    //TODO
  }
  public async delete(numero: number) {
    //TODO
  }
}