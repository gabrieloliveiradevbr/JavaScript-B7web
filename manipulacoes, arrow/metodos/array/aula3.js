let lista = ['45', '12', '36', '78', '90']
let listaAtualizada = []

/* map() percorre o array e retorna um novo array com os elementos transformados
listaAtualizada = lista.map(function(item) {
    return item * 2
})
*/

// filter() percorre o array e retorna um novo array com os elementos que passaram no filtro
listaAtualizada = lista.filter(function(item) {
    return item > 30
})

console.log(listaAtualizada)