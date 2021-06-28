import {Connection, createConnection} from 'typeorm';
import Candidato from '../src/entity/Candidato';
import Cidade from '../src/entity/Cidade';
import CidadeRepository from '../src/repositories/CidadeRepository'
import CandidatoRepository from '../src/repositories/CandidatoRepository'

import dotconfig from 'dotenv'
dotconfig.config()

test('Testing TypeORM connection dev or prod', async () => {
  expect(await createConnection(process.env.ENV))
  .toBeInstanceOf(Connection)
})

test("Testing CidadeRepository create", async () => {
  const cidadeRepository = new CidadeRepository()
  
  expect(await cidadeRepository.create('Xique-Xique'))
  .toBeInstanceOf(Cidade)
})


test("Testing CidadeRepository read", async () => {
  const cidadeRepository = new CidadeRepository()

  expect(await cidadeRepository.read('Xique-Xique'))
  .toBeInstanceOf(Cidade)
})

test('Testing CandidatoRepository create', async () => {
  const candidatoRepository = new CandidatoRepository()

  expect(await candidatoRepository.create(15, 'Reinaldinho', 'Xique-Xique'))
  .toBeInstanceOf(Candidato)
  expect(await candidatoRepository.create(40, 'Eduardo', 'Xique-Xique'))
  .toBeInstanceOf(Candidato)
  
})

test('Testing CandidatoRepository read', async () => {
  const candidatoRepository = new CandidatoRepository()

  expect(await candidatoRepository.read(15, 'Xique-Xique'))
  .toBeInstanceOf(Candidato)
  expect(await candidatoRepository.read(40, 'Xique-Xique'))
  .toBeInstanceOf(Candidato)
})