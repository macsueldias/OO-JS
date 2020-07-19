let alunos = [
    {nome: 'Macsuel',
    nota: 8.5
},
{
    nome: 'Miqueias',
    nota: 5
},
{
    nome: 'Sara',
    nota: 9
}]


let analise = f => f.nota > 7
let nome = g => g.nome
let aprovados = alunos.filter(analise).map(nome)
console.log(aprovados)