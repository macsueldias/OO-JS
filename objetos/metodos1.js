let pessoa = {
    nome: 'Sophia',
    idade: 1,
    falar: function() {
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade} ano(s)`)
    }
}

pessoa.falar()