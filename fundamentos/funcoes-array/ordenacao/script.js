let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana']

fruits.sort() //ordena o array em ordem alfabetica

console.log(fruits)

fruits.reverse() // como foi usado o sort no inicio, o reverse inverte a ordem alfabetica deixando de A á Z para Z á A (não existe função para ordem alfabetica inversa)

console.log(fruits)

let cars = [
    {nome: 'BMW', ano: 2022},
    {nome: 'Audi', ano: 2020},
    {nome: 'Mercedes', ano: 2018}
]

cars.sort((a, b) => a.ano - b.ano)

console.log('Ordenado por mais velho:')
console.log(cars)

cars.reverse()

console.log('Ordenado por mais novo:')
console.log(cars)
