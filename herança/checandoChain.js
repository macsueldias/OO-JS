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


let ferrari = new Carro('ferrari')

console.log(metro instanceof Trem)
console.log(ferrari instanceof Carro)

console.log(metro instanceof Veiculo)
console.log(ferrari instanceof Veiculo)

console.log(metro instanceof Object)
console.log(ferrari instanceof Object)

console.log(metro instanceof Carro)
console.log(ferrari instanceof Trem)