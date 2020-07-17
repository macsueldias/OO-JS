let pessoa = {
    nome: 'Sophia',
    idade: 30,
    falar: function() {
        return `Olá meu nome é ${this.nome} tenho ${this.idade} anos`
    },
    podeDirigir: function() {
        if(this.idade <= 18){
            console.log(pessoa.falar() + ' e não posso dirigir!')
        }else{
            console.log(pessoa.falar() + ' e posso dirigir!');
        }
    },
    caracteristica: {
        CNH: false,
        carteira: ['dinheiro', 'documentos', 'cartões']
    }
}

console.log(pessoa.caracteristica)
console.log(pessoa.caracteristica.carteira[1])