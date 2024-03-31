class Configuration {
    static name = 'Belajar JS OOP'
    static version = 1.0
    static author = 'Fahri Maulana'
}

const config = new Configuration()
console.log(config)

Configuration.author = 'Maulana'

console.log(Configuration.name)
console.log(Configuration.version)
console.log(Configuration.author)