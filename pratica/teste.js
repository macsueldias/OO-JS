let numeros = [1, 3, 5, 6, 1, 3]

let a = (ele, i, n) => n.indexOf(ele) === i
let b = numeros.filter(a)
console.log(b)