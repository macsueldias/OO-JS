let a = {
    nome: 'Carol',
    dizerNome() {
        console.log(`O nome deste objeto é ${this.nome}`)
    }
}

let b = {
    nome: 'Debora',
    idade: 25
}

a.dizerNome()
a.dizerNome.call(b)