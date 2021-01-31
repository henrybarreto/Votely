import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Cidade from './Cidade'

@Entity()
export default class Candidato extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    nome: string

    @Column()
    numero: number

    @Column(
        {
            default: 0
        }
    )
    votos: number

    @ManyToOne(
        () => Cidade,
        (cidade) => cidade.candidatos
    )
    cidade: Cidade
}