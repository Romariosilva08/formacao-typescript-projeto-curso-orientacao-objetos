export class Armazenador {
    private constructor() {}
    
    //A palavra-chave static permite que os métodos sejam chamados sem precisar criar um objeto a partir da classe Armazenador.
    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor)
        localStorage.setItem(chave, valorComoString)        
    }

    static obter<T>(chave: string, reviver?: (this:any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(chave)

        if(valor === null) {
            return null
        } 

        if(reviver) {
            return JSON.parse(valor, reviver) as T
        }

        return JSON.parse(valor) as T
    }
}