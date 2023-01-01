// 2.1 Execution Context, Hoisting & Scope

// Creation Phase
// console.log(nama);
// var nama = 'fahri'
// Execution Phase

// Memakai Function
// var nama = 'fahri'
// var umur = '25'

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`
// }

// console.log(sayHello())

// var nama = 'Fahri'
// var username = '@fah_viel'

// function cetakURL() {
//   console.log(arguments[0]);
//   var instagramURL = 'http://instagram.com/'
//   return instagramURL + username
// }

// console.log(cetakURL('@fahrimaulana'));

// function a() {
//   console.log('ini a')

//   function b() {
//     console.log('ini b')

//     function c() {
//       console.log('ini c')
//     }

//     c()
//   }

//   b()
// }

// a()

// latihan Closures

// function init() {
//   // let nama = 'fahri'
//   return function tampilNama(nama) {
//     console.log(nama)
//   }
// }
// let panggilNama = init()
// panggilNama('fahri')


// Function factories
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan`);
//   }
// }

// let selamatPagi = ucapkanSalam('pagi')
// let selamatSiang = ucapkanSalam('siang')
// let selamatMalam = ucapkanSalam('malam')

// selamatPagi('fahri')
// selamatMalam('Maulana')

// console.dir(selamatMalam)


// Function Private

let add = (function () {
  let counter = 0

  return function () {
    return ++counter
  }
})()


console.log(add());
console.log(add());
console.log(add());