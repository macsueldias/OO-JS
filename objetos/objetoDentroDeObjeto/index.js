let pessoa = {
    nome: 'Sophia',
    idade: 30,
    falar: function() {
        return `Olá meu nome é ${this.nome} tenho ${this.idade} anos`
    },
    podeDirigir: function() {
        if(this.caracteristica.CNH == false){
            return (pessoa.falar() + ' e não posso dirigir!')
        }else if(this.idade > 18){
            return (pessoa.falar() + ' e posso dirigir!');
        }
    },
    caracteristica: {
        CNH: false,
        carteira: ['dinheiro', 'documentos', 'cartões']
    }
}


console.log(pessoa.podeDirigir())
console.log(pessoa.caracteristica)
console.log(pessoa.caracteristica.carteira[1])