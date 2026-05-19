let fruits = ['Banana', 'laranja', 'Maçã', 'Pêra']

let bigFruits = fruits.filter((item) => item.length > 4)

console.log('Frutas com mais de 4 letras:')
console.log(bigFruits)

let todosMaioresQue4 = fruits.every((item) => item.length > 4) // verifica se todas as frutas tem mais de 4 letras (false ou true)

let peloMenosUmMaiorQue4 = fruits.some((item) => item.length > 4) // verifica se pelo menos uma fruta tem mais de 4 letras (false ou true)

if(todosMaioresQue4) {
    console.log('Todas as frutas tem mais de 4 letras')
} else {
    console.log('Nem todas as frutas tem mais de 4 letras')
}

if(peloMenosUmMaiorQue4) {
    console.log('Pelo menos uma fruta tem mais de 4 letras')
} else {
    console.log('Nenhuma fruta tem mais de 4 letras')
}

if(fruits.includes('Uva')) {
    console.log('Tem Uva')
} else {
    console.log('Não tem Uva')
}
