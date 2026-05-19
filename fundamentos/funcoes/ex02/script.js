/* 
calcule o preco do imovel
- m2 = 3000
- se tuver 1 quarto, o m2 e 1x mais caro
- se tuver 2 quartos, o m2 e 1.2x mais caro
- se tuver 3 quartos, o m2 e 1.5x mais caro
Uso da função:
 */

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos)
console.log(`O preço do imóvel é R$ ${preco}`)

function calcularImovel(metragem, quartos) {
    let m2 = 3000
    if (quartos === 1) {
        return metragem * m2
    } else if (quartos === 2) {
        return metragem * (m2 * 1.2)
    } else if (quartos === 3) {
        return metragem * (m2 * 1.5)
    } else {
        return metragem * (m2 * 2)
    }

}