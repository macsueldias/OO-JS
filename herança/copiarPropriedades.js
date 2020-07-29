function extend(pai, filho) {
    let paiProto = pai
    let filhoProto = filho
    for(let i in paiProto) {
        filhoProto[i] = paiProto[i]
    }
    // filho tem acesso ao obj pai
    filhoProto.uber = paiProto
}

function Veiculo() {}

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function () {
    console.log('O veiculo ligou!');
}

function Trem(tipo) {
    this.tipo = tipo
}

Trem.prototype.vagoes = 50

function Carro() {}

Carro.prototype.pneus = 4

// copiando só o prototype, em vez de instanciar uma classe
Trem.prototype = Veiculo.prototype

// construtor temporario
extend(Veiculo, Carro)
extend(Veiculo, Trem)

let trembala = new Trem('trem bala')
let trem = new Trem('trem')
let ferrari = new Carro()

Carro.prototype.ligar = function() {
    console.log('O carro ligou')
}

Trem.prototype.ligar = function() {
    console.log('Piuiiiiiii')
}

trem.ligar()
trembala.ligar()
ferrari.ligar()