let t = 'tipo_de_'

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
    [t+ 'carro']: 'Sedan',
    ligar() {
        return ('O carro ligou')
    },
    desligar() {
        return ('O carro desligou')
    }
}

let barco = {
    [t + 'barco']: 'Lancha'
}

let casa = {
    [t + 'casa']: 'Sobrado'
}

console.log(carro.tipo_de_carro)
console.log(barco.tipo_de_barco)
console.log(casa.tipo_de_casa)

