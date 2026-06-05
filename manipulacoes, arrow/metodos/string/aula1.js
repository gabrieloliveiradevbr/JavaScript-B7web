let nome = 'Gabriel de Oliveira Silva'

resultado = ''

if (nome.indexOf('Silva') > -1) {
    resultado = `Encontrado! Está na posição ${nome.indexOf('Silva')}`
} else {
    resultado = 'Não encontrado'
}

console.log(resultado)