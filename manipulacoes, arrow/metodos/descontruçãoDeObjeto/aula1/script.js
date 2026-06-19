let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira',
    idade: 18,
    social: {
        insta: '@gabriel.wzzz',
        wpp: '71993166061'
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    }
}

let { nome: p1, sobrenome: p2, idade: p3 = 30 } = pessoa

console.log(p1, p2, p3)