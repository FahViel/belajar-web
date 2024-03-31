// menggunakan Class dan constructor di class

// class Person {
//     constructor(name){
//         console.log(`membuat person ${name}`)
//     }
// }

// const fahri = new Person('fahri')
// console.log(fahri)



// menambahkan property
// class Person {
//     constructor(name){
//         this.name = name
//     }

//     sayHello(name){
//         console.log(`hi ${name}, my name is ${this.name}`)
//     }
// }

// const fahri = new Person('fahri')
// fahri.sayHello('Maulana')

// console.log(fahri)
// console.log(fahri.name)


// menggunakan class inheritance
// class Employee {
//     sayHello(name){
//         console.log(`Hi ${name}, my name is employee ${this.name}`)
//     }
// }

// class Manager extends Employee {
//     sayHello(name){
//         console.log(`hi ${name}, my name is manager ${this.name}`)
//     }
// }

// const fahri = new Employee()
// fahri.name = 'Fahri'
// fahri.sayHello('Maulana')

// const muhammad = new Manager()
// muhammad.name = 'Muhammad'
// muhammad.sayHello('Fahri')


// Menggunakan class super constructor
class Employee {

    constructor(firstName) {
        this.firstName = firstName
    }

    sayHello(name){
        console.log(`Hi ${name}, my name is employee ${this.firstName}`)
    }
}

class Manager extends Employee {

    constructor(firstName, lastName){
        super(firstName)
        this.lastName = lastName
    }

    sayHello(name){
        console.log(`hi ${name}, my name is manager ${this.firstName} ${this.lastName}`)
    }
}

const fahri = new Employee('Fahri')
fahri.sayHello('Maulana')

const muhammad = new Manager('muhammad', 'maulana')
muhammad.sayHello('Fahri')