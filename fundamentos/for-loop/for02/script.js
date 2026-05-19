let cores = ['preto', 'branco', 'azul', 'vermelho']

cores.push('amarelo')

for (let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}
    
//for in percorre as chaves do array
for(let i in cores) {
    console.log(`Indice ${i} e valor ${cores[i]}`)
}

let coresObjeto = [
    {nome: 'preto', qtdEstoque: 10}, 
    {nome: 'branco', qtdEstoque: 20}, 
    {nome: 'azul', qtdEstoque: 30}, 
    {nome: 'vermelho', qtdEstoque: 40}
]

//for of percorre os valores do array
for(let cor of coresObjeto) {
    console.log(`Cor: ${cor.nome} - Estoque: ${cor.qtdEstoque}`)
}