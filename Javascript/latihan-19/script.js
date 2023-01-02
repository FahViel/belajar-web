// Function Expression

// Menggunakan Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`
// }
// console.log(tampilNama('Fahri'));

// Dua Parameter
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('Fahri', 'Malam'));

// Refactoring satu parameter
// const tampilNama = nama => {
//     `Halo, ${nama}`
// }
// console.log(tampilNama('Fahri'));

// Tanpa parameter
// const tampilNama = () => `Hello World !!`
// console.log(tampilNama());

// Using array
// let mahasiswa = ['Muhammad', 'Fahri', 'Maulana']
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length
// })
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => nama.length)
// console.log(jumlahHuruf);

// Memakai console table
// let jumlahHuruf = mahasiswa.map( nama => ({ nama, jumlahHuruf: nama.length }))
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function

// Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Fahri'
//     this.umur = 25
//     this.sayHello = function () {
//         console.log(`Halo, Nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const fahri = new Mahasiswa()

// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Fahri'
//     this.umur = 25
//     this.sayHello = () => {
//         console.log(`Halo, Nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const fahri = new Mahasiswa()

// Object litereal

// const mhs1 = {
//   nama: 'Fahri',
//   umur: 25,
//   sayHello: function () {
//     console.log(`Halo, Nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//   }
// }

// Study Case, constructor function
// const Mahasiswa = function () {
//     this.nama = 'Fahri'
//     this.umur = 25
//     this.sayHello = function () {
//         console.log(`Halo, Nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//       console.log(this.umur++);
//     }, 500)
// }
// const fahri = new Mahasiswa()














