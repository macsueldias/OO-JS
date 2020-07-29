function Veiculo() {
    this.carenagem = 'aço'
    this.ligar = function() {
        console.log(`O veiculo ligou`)
    }
}

function Trem(tipo) {
    this.tipo = tipo
    this.vagoes = 50
}

function Carro() {
    this.pneus = 4
}

Trem.prototype = new Veiculo()
Carro.prototype = new Veiculo()

let metro =  new Trem('metrô')
console.log(metro.tipo)
metro.ligar()

let ferrari = new Carro('ferrari')
ferrari.ligar()

