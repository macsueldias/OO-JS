if(typeof Array.prototype.checkLength != 'function') {
    Array.prototype.checkLength = function() {
        return this.length
    }
}

let arr = [1, 2, 3, 4]
console.log(arr.checkLength())


if(typeof Array.prototype.join != 'function') {
    Array.prototype.join = function() {
        return this[0], this[1]
    }
}

console.log(arr.join())