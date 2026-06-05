class Person {

    static hands = 2
    age = 10

    constructor(name) {
        this.firstName = name
    }

    sayHi() {
        console.log(`Oi, eu sou ${this.firstName} e tenho ${Person.hands} mãos`)
    }

}

let p1 = new Person('Gabriel')

p1.sayHi()

Person.hands = 3

p1.sayHi()


