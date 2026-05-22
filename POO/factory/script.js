class Person {

    age = 0

    constructor(name) {
        this.firstName = name
    }


}

function createPerson(name, age) {
    let p = new Person(name)
    p.age = age
    return p
}

let p1 = createPerson('Gabriel', 18)

console.log(`${p1.firstName} tem ${p1.age} anos`)
