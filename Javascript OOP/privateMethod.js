class Person {
    
    say(name){
        if(name){
            this.#sayWithName(name)
        } else {
            this.#sayWithoutName()
        }
    }

    #sayWithoutName(){
        console.log('hello')
    }

    #sayWithName(name){
        console.log(`hello my name is ${name}`)
    }

}

const fahri = new Person()
fahri.say('fahri')

console.log(fahri)