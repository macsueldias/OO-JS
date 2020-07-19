let notas = [5, 6, 7, 6, 9, 4, 8, 8, 10]


let calc = notas.reduce(function(acc, valor){
    return acc + valor
})
let resultado = calc/notas.length
console.log(resultado)



let classe = [{
    nome:'Macsuel',
    nota: 5
},
{
    nome:'Lauane',
    nota: 9
},
{
    nome: 'Alice',
    nota: 4
}]



classe.push({nome: 'Sara', nota: 10})

let n = f => f.nota
let soma = classe.map(n).reduce(function(acc, valor){
    return acc + valor
})
let resu = soma/classe.length
console.log(resu)