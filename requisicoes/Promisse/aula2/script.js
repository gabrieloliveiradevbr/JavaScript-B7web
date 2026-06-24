function pegarTemperatura() {
    return new Promise(function (resolve, reject) {
        console.log("pegando temperatura... ")

        setTimeout(function() {
            resolve('40° na sombra')
        }, 2000)
    })
}

// USANDO A PROMISE
let temp = pegarTemperatura()
temp
    .then(function (resultado) {
        console.log(resultado)
    })
    .catch(function (erro) {
        console.log(erro)
    })
    .finally(function () {
        console.log('Fim da requisição')
    })