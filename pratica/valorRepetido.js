let numeros = [1, 2, 3, 3, 4, 1, 5, 1, 2]

let b = (elem, index, arr) => arr.indexOf(elem) != index
let semRepetição = numeros.filter(b)
console.log(semRepetição)