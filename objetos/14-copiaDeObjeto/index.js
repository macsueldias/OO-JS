// modo não recomendado de copiar objeto
let obj = {
    numero: 1,
}

console.log(obj.numero)

let copia = obj

console.log(copia.numero)

copia.numero = 5

console.log(obj.numero)

// modo recomendado de copiar um objeto
let pessoa1 = {
    nome: 'Lauane',
    idade: 23,
    getNome() {
        return (`O nome do objeto é ${this.nome} e tem ${this.idade}`)
    }
}

let pessoa2 = {

}

Object.assign(pessoa2, pessoa1)
console.log(pessoa2)

pessoa2.idade = 24
console.log(pessoa1.idade)

pessoa2.nome = 'Bruna'
console.log(pessoa2.getNome())


