function criarCarro(modelo, ano, roda, tetoSolar) {
    return {
        modelo: modelo,
        ano: ano,
        roda: roda,
        tetoSolar: tetoSolar,
        ligarCarro: function() {
            console.log('Ligou')
        },
        temTetoSolar: function() {
            if(this.tetoSolar){
                console.log('Tem teto solar')
            }else{
                console.log('Não tem teto solar')
            }
        }
    }
}

let civic = criarCarro('Civic', 2020, 15, false)
console.log(civic.modelo)

civic.ligarCarro()
civic.temTetoSolar()