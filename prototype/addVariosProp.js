function Cidade(nome, populaçao) {
    this.nome = nome
    this.populaçao =populaçao
}

Cidade.prototype = {
    nome: 'Piracicaba',
    populaçao: 425000,
    chuva() {
        return `Em ${this.nome} está chovendo`
    }
}

Cidade.prototype.rio = true
let ubatuba = new Cidade('Ubatuba', 179000)

console.log(ubatuba.chuva())
console.log(ubatuba.rio)