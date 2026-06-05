/* 
Caclcule a porcentagem entre 2 numeros
 */

// exemplo 25% de 40 é 10

function calcular(n1, n2) {
    return (n2 / n1) * 100
    
}

let x = 40
let y = 10
let pct = calcular(x, y)

console.log(`${pct}% de ${x} é ${y}`)