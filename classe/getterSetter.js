class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    nomeDaPessoa() {
        return `O nome da pessoa é: ${this.nome}`
    }
    set mudarNomeDaPessoa(novoNome) {
        this.nome = `Sr. ${novoNome}`
    }
    get receberNomePessoa() {
        return `O nome da pessoa é: ${this.nome}`
    }
}

let macsuel = new Humano('Macsuel', 30)

console.log(macsuel.nomeDaPessoa())

macsuel.mudarNomeDaPessoa = 'Maxwell'

console.log(macsuel.receberNomePessoa)