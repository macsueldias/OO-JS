let maquina = {
    material: 'Aço inox',
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    quantidadeDeMotores: 1
}

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos[2])
console.log(maquina.equipamentos)

for(let i = 0; i < maquina.equipamentos.length; i++){
    console.log(`${i + 1}) equipamentos da maquina ${maquina.equipamentos[i]} `)
}

if(maquina.vaiMontada == false) {
    console.log('A maquina não vai montada, a montagem é por conta do cliente')
}

console.log(`É preciso contratar um motador`, maquina.vaiMontada? 'Não precisa enviaremos nosso montador': 'Entre em contato com o serviço do cliente e pesquise um montador na sua região!')