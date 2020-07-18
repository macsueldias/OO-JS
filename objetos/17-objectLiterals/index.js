let rodas = 4
let portas = 4
let aro = 20
let tetoSolar = true

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    ligar() {
        return ('O carro ligou')
    },
    desligar() {
        return ('O carro desligou')
    }
}


console.log(carro.rodas)
console.log(carro.ligar())
console.log(carro.desligar())