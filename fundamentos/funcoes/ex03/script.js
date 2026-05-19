/* 
Crie uma função que valide usuário e senha.
Usuario correto: pedro
Senha correta: 123
 */

let usuario = 'pedro'
let senha = '123'
let validacao = validar(usuario, senha)

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true
    } else {
        return false
    }
}

if (validacao) {
    console.log('Usuario validado')
} else {
    console.log('Usuario invalido')
}
