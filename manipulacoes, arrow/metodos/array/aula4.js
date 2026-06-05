let lista = ['45', '12', '36', '78', '90']
let listaAtualizada = []

listaAtualizada = lista.find(function(item) {
    return(item === '36') ? true : false
})

// find() percorre o array e retorna o primeiro elemento que passar no teste
// findIndex() percorre o array e retorna o indice do primeiro elemento que passar no teste

console.log(listaAtualizada)

let pessoas = [
    { id: 1, nome: 'Gabriel', idade: 20},
    { id: 2, nome: 'João', idade: 25},
    { id: 3, nome: 'Maria', idade: 30},
]

let pessoaEncontrada = pessoas.find(function(pessoa) {
    return(pessoa.id === 2) ? true : false
})

console.log(pessoaEncontrada)