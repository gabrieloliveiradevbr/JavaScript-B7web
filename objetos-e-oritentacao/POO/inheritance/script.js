class Person {

    age = 0

    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`Olá, meu nome é ${this.name}`)
    }

    
}

class Student extends Person {

    constructor(name, id) {
        super(name)
        this.id = id
    }

    sayHello() {
        super.sayHi()
    }
}

let p1 = new Student('Maria', 123)
p1.age = 20

let p2 = new Person('Luiz')
p2.age = 30


console.log(` ${p1.name} é um estudante, tem ${p1.age} anos e sua matrícula é #${p1.id}`)
console.log(` ${p2.name} não é estudante e tem ${p2.age} anos`)

p1.sayHello() // chama o método da classe Person
p2.sayHi() // diz olá