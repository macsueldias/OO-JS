function Carro(marca, preco, cor, aro) {
    this.marca = marca
    this.preco = preco
    this.calota = true
    this.cor = cor
    this.aro = aro
}

let fusca = new Carro('VW', 9000, 'preto', 15)

for(prop in fusca) {
    console.log(`${prop} = ${fusca[prop]}`)
}