function criar() {
    let a = [1, 2, 3]
    return a
}

let [a, b, c] = criar()

console.log(a, b, c)


function mostrarFrutas() {
    let frutas = ['banana', 'maçã', 'laranja', 'uva']
    return frutas
}

let [fruta1, fruta2, fruta3, fruta4] = mostrarFrutas()

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(fruta4)