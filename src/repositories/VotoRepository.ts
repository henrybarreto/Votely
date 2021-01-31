import Candidato from '../entity/Candidato'
import Cidade from '../entity/Cidade'
import IVotoRepository from './interface/IVotoRepository'

export default class VotoRepository implements IVotoRepository{
  constructor() {
  }
  public async create(numero: number, cidade: string) {
  }
  public async read() {
  }
}