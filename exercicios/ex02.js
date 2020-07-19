let pessoa = {
    nome: 'Ana Vilela',
    profissao: 'cantora',
    falarDados(idade) {
        this.idade = idade
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

pessoa.falarDados(25)