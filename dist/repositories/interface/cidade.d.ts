export default interface ICidadeRepository {
    create(nome: string): Promise<any>;
    read(nome: string): Promise<any>;
    update(nome: string, dadosParaAtualizar: any): Promise<any>;
    delete(nome: string): Promise<any>;
}
