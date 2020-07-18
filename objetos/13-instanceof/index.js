function criarArvore(especie, temFruto) {
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Laranjeira', true)

console.log(laranjeira)
console.log(laranjeira.constructor)

function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}
let jaspion = new Heroi('jaspion', 'robo')

console.log(jaspion)
console.log(jaspion.constructor)

let obj = {
    teste: 'teste',
}

let arr = [

]

console.log(obj.constructor)

console.log(laranjeira instanceof criarArvore)
console.log(laranjeira instanceof Object)
console.log(jaspion instanceof Heroi)
console.log(obj instanceof Object)
console.log(arr instanceof Array)