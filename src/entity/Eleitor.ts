import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Eleitor extends BaseEntity{
    
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    titulo: string

}