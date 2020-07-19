trueFalse = function(curso1, curso2) {
    if(curso1 instanceof curso2){
        console.log(`O objeto ${curso1.nome} é uma instancia do objeto ${curso2.name}`)
    }else{
        console.log(`O objeto ${curso1.nome} não é uma instancia do objeto ${curso2.name}`)
    }
}

function Curso(nome) {
    this.nome = nome;
}



let ads = new Curso('analise e desenvolvimento de sistemas')
let sdi = new Curso('segurança da informação')
trueFalse(ads, Curso)
trueFalse(ads, Array)
trueFalse(sdi, Object)
trueFalse(sdi, String)


