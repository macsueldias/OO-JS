function Carro(nome, preço) {
    this.nome = nome
    this.preço = preço
}

Carro.prototype.rodas = 4
Carro.prototype.ligar = function() {
    return (`A ${this.nome} ligou`)
}

let bmw = new Carro('BMW', 130000)

console.log(bmw)
console.log(bmw.ligar())