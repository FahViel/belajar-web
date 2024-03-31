// Menggunakan instance of
// class Employee {

// }

// class Manager {

// }

// const fahri = new Employee()
// const maulana = new Manager()

// console.log(fahri instanceof Employee)
// console.log(fahri instanceof Manager)

// console.log(maulana instanceof Employee)
// console.log(maulana instanceof Manager)


//  Menggunakan instance of inheritance
class Employee {

}

class Manager extends Employee {

}

const fahri = new Employee()
const maulana = new Manager()

console.log(fahri instanceof Employee)
console.log(fahri instanceof Manager)

console.log(maulana instanceof Employee)
console.log(maulana instanceof Manager)