const familia = [{
    nome: 'Macsuel',
    idade: 30
}, {
    nome: 'Sara',
    idade: 31
}, {
    nome: 'Sophia',
    idade: 2
},{
    maisVelho() {
        let m = 0
        for(let i = 0; i < familia.length - 1; i++){
            if(this.idade[i] > m){
                m = this.idade[i]
            }
        }
        console.log(m)
    }
}]

console.log(JSON.parse(familia))