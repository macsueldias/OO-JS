class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`O ${this.nome} falou`)
    }
}

class Engenheiro extends Humano {
    constructor(nome, idade, espec) {
        super(nome, idade)
        this.profissao = 'Engenheiro'
        this.especializaçao = espec
    }
}

let joao = new Engenheiro('Joao', 25, 'Civil')

console.log(joao)


class Veiculo {
    constructor(nome, velMax) {
        this.nome = nome
        this.velMax = velMax
    }
    Vel() {
        console.log(`A velocidade maxima do ${this.nome} é ${this.velMax} km/h`)
    }
}

class Carro extends Veiculo {
    constructor(nome, velMax, potencia) {
        super(nome, velMax)
        this.potencia = potencia
    }
}

let civic = new Carro('Civic', 240, 1.8)
console.log(civic)
civic.Vel()