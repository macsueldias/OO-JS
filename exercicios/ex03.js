function Ninja(nome, arma) {
    return{
        nome: nome,
        arma: arma,
        atirar() {
            console.log(`${this.nome} atirou com ${this.arma}`)
        }
    }
}

let ninja1 = new Ninja('Naruto', 'Shuriken')
ninja1.atirar()