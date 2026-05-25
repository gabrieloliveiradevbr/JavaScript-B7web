let person = {
    name: 'Pedro',
    lastName: 'Assis',
    age: 35,

    getFullName() {
        return this.name + ' ' + this.lastName
    }
}



console.log(person.getFullName())
