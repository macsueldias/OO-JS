let valores = [1, 2, 6, 8, 3, 5]



function maiorValor(valores) {
    this.valores = valores
    let maior = 0
    for(let i = 0; i < this.valores.length ; i++) {
        if(this.valores[i] > maior){
            maior = this.valores[i]
        }
    }
    console.log(`O maior valor é ${maior}`)
}

maiorValor.call(this, valores)
