// Penerapan getter dan setter
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        const result = value.split(' ')
        this.firstName = result[0]
        this.lastName = result[1]
    }
}

const fahri = new Person('Fahri', 'Maulana')
console.log(fahri.fullName)

fahri.fullName = 'Muhammad Fahri'
console.log(fahri)