let pessoa = {
    nome: 'Sophia',
    idade: 1,
    falar: function() {
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade} ano(s)`)
    },
    aniversario() {
        return this.idade ;
    }
}

let gato = {
    nome: 'Preta',
    idade: 3
}

Object.setPrototypeOf(gato, pessoa)

console.log(pessoa.aniversario())
pessoa.falar()
gato.falar()