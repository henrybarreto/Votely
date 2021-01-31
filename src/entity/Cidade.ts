import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Candidato from './Candidato'

@Entity()
export default class Cidade extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    nome: string

    @OneToMany(
        () => Candidato, 
        (candidato) => candidato.cidade
        )
    candidatos: Candidato[]
}