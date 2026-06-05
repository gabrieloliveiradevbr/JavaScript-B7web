class Person {

    _age = 10
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

    setAge(newAge) {
        if (typeof newAge !== 'number') {
            console.log('A idade deve ser um número portanto não foi possível alterar')
            return
        }
        this.age = newAge
        console.log('Idade alterada com sucesso para ' + newAge)
    }

}

let p1 = new Person('Luiz')
let p2 = new Person('Maria')

p1.age = 30
p2.age = 25

console.log(`Nome: ${p1.name}, Idade: ${p1.age}`)
console.log(`Nome: ${p2.name}, Idade: ${p2.age}`)

p1.takeAStep()
p1.takeAStep()


console.log(`Nome: ${p1.name}, Idade: ${p1.age}, Passos: ${p1.steps}`)

p1.setAge(20)
console.log(`Nome: ${p1.name}, Idade: ${p1.age}, Passos: ${p1.steps}`)
