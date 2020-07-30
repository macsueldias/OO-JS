// com o metodo static não é possivel criar propriedade que recebe os parametros
class Calc {
    static soma(a, b) { 
        return a + b
    }
}

console.log(Calc.soma(3, 5))
console.log(Calc.soma(15, 107))