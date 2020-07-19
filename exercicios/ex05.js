function Ninja(nome, municao) {
    this.nome = nome;
    this.municao = municao;
    this.atirar = function (adversario) {
        if (this.municao < 1) {
            console.log(`As shuriken acabaram`)
        } else {
            this.municao -= 1
            console.log(`${this.nome} atirou`)
            adversario.vivo = false
        };
    }
}

function Inimigo(nome) {
    this.nome = nome;
    this.vivo = true;
}


let ninja1 = new Ninja('Naruto', 2)
let ninja2 = new Inimigo('Kamikasi')
ninja1.atirar(ninja2)
console.log(ninja2)



