let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    nacionalidade: 'Brasil',

    falar: function () {
        return 'Olá, meu nome é ' + this.nome + ' ' + this.sobrenome
    }
}

console.log(pessoa.falar())