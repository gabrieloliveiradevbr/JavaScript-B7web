let person = {
    name: 'Pedro',
    lastName: 'Assis',
    age: 35,

    getFullName() {
        return this.name + ' ' + this.lastName
    },

    start() {
        console.log("deu start na pessoa")
    }
}

person.start()

console.log(person.getFullName())