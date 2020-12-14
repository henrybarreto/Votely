export default interface ICandidatoRepository {
    create(numero: number, nome: string, cidade: string): Promise<any>;
    read(numero: number, cidade: string): Promise<any>;
    update(numero: number, cidade: string, dadosParaAtualizar: any): Promise<any>;
    delete?(numero: number): Promise<any>;
}
