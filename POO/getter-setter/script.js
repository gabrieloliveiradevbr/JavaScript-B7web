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

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }


    // Getters and Setters
    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x
            return
        }
        console.log('A idade deve ser um número')
    }
}

let p1 = new Person('Luiz', 'Otavio')
let p2 = new Person('Maria', 'Silva')
let p3 = new Person('João', 'Souza')



p1.age = 25


p1.takeAStep()
p1.taeAStep()
console.log(`Nome: ${p1.fullName}, tem ${p1.age} anos, deu ${p1.steps} passos`)