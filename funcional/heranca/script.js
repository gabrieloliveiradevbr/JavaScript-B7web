const defaultUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'Bonieky',
    email: 'suporte@b7web.com.br'
}

const adm1 = {
    ...defaultUser,
    name: 'Adm boladão',
    email: 'adm@admboladao',
    level: 2
}

console.log(user1)
console.log(adm1)