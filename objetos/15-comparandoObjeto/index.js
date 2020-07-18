function Ninja(nome, arma) {
    this.nome = nome
    this.arma = arma
}

const naruto = new Ninja('naruto', 'shuriken')
const rocklee = new Ninja('Rock lee', 'punhos')
const cloneDoNaruto = new Ninja('naruto', 'shuriken')
const cloneDoVerdadeiroNaruto = naruto

console.log(naruto === rocklee)
console.log(naruto === cloneDoNaruto)
console.log(naruto === cloneDoVerdadeiroNaruto)
console.log(cloneDoNaruto === cloneDoVerdadeiroNaruto)