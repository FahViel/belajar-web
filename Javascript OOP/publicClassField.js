// Menggunakan public class field
class Customer{
    firstName;
    lastName;
    balance = 0

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello(){

    }
}

const fahri = new Customer('Muhammad', 'Fahri')
console.log(fahri)
