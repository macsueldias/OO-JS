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
    }
}
pessoa.podeDirigir();

let gato = {
    nome: 'Preta',
    idade: 3
}

Object.setPrototypeOf(gato, pessoa)

pessoa.falar()
gato.falar()

let calculadora = {
    numeros: 0,
    somar: function(a, b) {
        this.numeros = a + b
    },
    subtrair(a) {
        this.numeros -= a
    }
}

calculadora.somar(8, 5)
console.log(calculadora.numeros)

calculadora.subtrair(4)
console.log(calculadora.numeros)