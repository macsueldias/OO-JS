function Ninja(nome, municao) {
    this.nome = nome;
    this.municao = municao;
    this.atirar = function() {
        if(this.municao < 1){
            console.log(`As shuriken acabaram`)
        }else{
            this.municao -= 1
            console.log(`${this.nome} atirou`)
        };
    }
}

let ninja1 = new Ninja('Naruto', 2)

ninja1.atirar()
ninja1.atirar()
ninja1.atirar()
console.log(`${ninja1.nome} tem ${ninja1.municao} shuriken`)