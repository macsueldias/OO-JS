Array.prototype.checkLength = function() {
    return this.length
}

Array.prototype.somaDoisPrimeiros = function() {
    return this[0] + this[1]
}

Array.prototype.concatElem = function() {
    let j = this.join('')
    return j
}

let a = [1, 2, 3, 4, 5, 6]

let b = [12, 2, 4]

console.log(a.checkLength())
console.log(b.somaDoisPrimeiros())

console.log(a.concatElem())