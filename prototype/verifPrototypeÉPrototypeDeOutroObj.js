let equipamentosDoCarro = {
    preço: 8000,
    calota: true,
    cor: 'Azul',
    aro: 15
}

function Carro(marca) {
    this.marca = marca
}

let fusca = new Carro('VW')

Carro.prototype = equipamentosDoCarro

console.log(fusca.preço)

console.log(equipamentosDoCarro.isPrototypeOf(fusca))