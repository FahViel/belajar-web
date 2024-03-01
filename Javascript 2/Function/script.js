// Belajar function

// function addName (firstName, lastName){
//     console.log(firstName + lastName)
// }

// const fullName = new Function("firstName", "lastName", "console.log(firstName, lastName)")

// fullName("Fahri", "Maulana")

// cara 1 memakai new
const sum = new Function('x', 'y', 'console.log(x + y)')
sum(2, 4)

// cara 2 standar function
function sum2(x, y) {
  console.log(x + y)
}
sum2(4, 5)

// cara 3 memakai arrow function
const sum3 = (x, y) => {
  console.log(x + y)
}
sum3(5, 5)

// Hoisting (membaca value sebelum di inisialisasi)
namaSaya('Fahri ', 'Maulana')
function namaSaya(namaDepan, namaBelakang) {
  console.log(namaDepan + namaBelakang)
}

/*
Tugas
1. Membuat perhitungan matematika
    - luas lingkaran
    - luas segitiga
    - luas persegi panjang
    - luas jajargenjang
*/

// Tugas 1
// luas lingkaran
const pi = 3.14
const r2 = 10

function luasLingkaran(pi, r2) {
  return pi * (r2 * r2)
}

console.log(`Hasil luas Lingkaran adalah ${luasLingkaran(pi, r2)}`)

// luas segitiga
const l = 0.5
const a = 6
const t = 3

const luasSegitiga = (l, a, t) => {
  return l * (a * t)
}

console.log(`Hasil luas segitiga adalah ${luasSegitiga(l, a, t)}`)

//  luas persegi panjang
const p = 10
const lbr = 5

const luasPersegiPanjang = new Function('p', 'lbr', 'return p * lbr')

console.log(`Hasil luas Persegi Panjang adalah ${luasPersegiPanjang(p, lbr)}`)

// luas jajar genjang
const alas = 20
const tinggi = 10

const luasJajarGenjang = (alas, tinggi) => {
  return alas * tinggi
}

console.log(`Hasil luas jajar genjang adalah ${luasJajarGenjang(alas, tinggi)}`)

// Tugas 2
/*
2. Menghitung total gaji yang di dapat dalam satu bulan dengan input minimal :
    - Nama karyawan 
    - Gaji perhari
    - Jumlah hari masuk kerja
*/

const namaKaryawan = prompt(`Masukkan nama Karyawan : `)
const gajiPerhari = parseInt(prompt('Masukkan gaji perhari : '))
const jumlahAbsensi = parseInt(prompt('Masukkan jumlah absensi : '))

const totalGaji = (gajiPerhari, jumlahAbsensi) => {
    return gajiPerhari * jumlahAbsensi
}

console.log(`Total gaji karyawan yang bernama ${namaKaryawan} sejumlah Rp.${totalGaji(gajiPerhari, jumlahAbsensi)}`)