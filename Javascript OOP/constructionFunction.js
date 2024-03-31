// contoh dengan object
// const fahri = {
//     firstName : 'Muhammad',
//     lastName: 'Maulana'
// }

// contoh dengan class dengan js versi lama
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = (name) => {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}

const fahri = new Person('Muhammad', 'Maulana')
fahri.sayHello('john')

console.log(fahri)


// constructor inheritance
