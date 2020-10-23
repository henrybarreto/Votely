export default interface IVotoRepository {
  create(numero: number, cidade: string): Promise<any>
  read(): Promise<any>
}