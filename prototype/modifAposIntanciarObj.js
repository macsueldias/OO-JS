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

Cidade.prototype.comercio = function() {
    return `O comércio de ${this.nome} está aberto`
}

let fortaleza = new Cidade('Fortaleza', 1500000)

console.log(ubatuba.comercio())