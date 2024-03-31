// Prototype Inheritance
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = (name) => {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}

// menambahkan prototype
Person.prototype.sayBye = () => {
    console.log('good bye')
}

Person.prototype.run = () => {
    console.log(`${this.firstName} is running`)
}

const fahri = new Person('Muhammad', 'Fahri')
fahri.sayBye()
fahri.run()

console.log(fahri)

