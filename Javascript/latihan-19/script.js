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
let mahasiswa = ['Muhammad', 'Fahri', 'Maulana']
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length
// })
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => nama.length)
// console.log(jumlahHuruf);

// Memakai console table
let jumlahHuruf = mahasiswa.map( nama => ({ nama, jumlahHuruf: nama.length }))
console.table(jumlahHuruf);