let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira',
    idade: 18,
    social: {
        insta: {
            nome: '@gabriel.wzzz',
            links: 'https://instagram.com/gabriel.wzzz'
        },
        wpp: '71993166061'
    },
}

let { nome, idade, social: { insta: { links: instagramLink } } } = pessoa

console.log(nome, idade, instagramLink)

function pegarNomeCompleto(obj) {
    return `${obj.nome} ${obj.sobrenome}`
}

console.log(pegarNomeCompleto(pessoa))