function estoque (nome, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade
    this.TvVendida = function() {
        this.quantidade -= 1
        return `Quantidade de TV no estoque: ${this.quantidade}`
    }
}


let tv = new estoque('Tv', 3)

tv.TvVendida()
tv.TvVendida()
console.log(`Quantidade de TV no estoque: ${tv.quantidade} unid.`)
