const dirigir = {
    carro: 'Civic',
    ano: 2020,
    proprietario: 'Macsuel',
    destino: 'São Sebastião',
    documento: 'ok',
    tanque: 0,
    combustivel: function(condicao){
        if(this.tanque < 1){
            condicao = 0
            return 'sem combustivel'
        }else if(this.tanque < 5){
            return 'Baixo nível de combustivel'
        }else if(this.tanque > 20){
            return 'Tanque cheio'
        }
    },
    ligarCarro(condicao){
        if(condicao >= 1){
            return 'ligado, pronto'
        }else{
            return `${dirigir.combustivel()}`
        }
    }
}

console.log(`O ${dirigir.carro} está ${dirigir.ligarCarro(1)} para ir a ${dirigir.destino}!`)