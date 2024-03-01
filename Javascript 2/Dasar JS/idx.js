// let age = 20
// console.log(`usia kamu adalah `+ age)


// prompt test
// let age = prompt(`Masukkan Usia Anda ?`)
// alert(`Usia Kamu adalah ` + age)


// Type data 
// let nama = "fahri" // tipe data string
// let umur = 27 // tipe data integer (number)
// let tinggiBadan = 170.2 // tipe data double/float 
// let beratBadan = 80 // tipe data integer
// let pacar = null // tipe data null


// statement kondisi

// if
// if ( pacar == null ) {
//     pacar = 'jomblo'
// } else {
//     pacar = 'sudah taken'
// }

// switch
// switch (pacar) {
//     case 1:
//         pacar = 'punya pacar'
//         break;
//     case 2:
//         pacar = 'kakean pacar'
//         break
//     default:
//         pacar = 'belum punya pacar'
//         break;
// }
// console.log(`halo nama saya adalah ${nama}, saya berumur ${umur} tahun, tinggi saya adalah ${tinggiBadan} cm, berat badan saya adalah ${beratBadan}, dan status saya ${pacar}`)


// operator renderer
// let [saldoAwal, saldoAkhir] = [5000, 80000]
// const hutang = 3000000
// const totalSaldo = saldoAwal + saldoAkhir - hutang
// console.log(`saldo yang saya punya sekarang adalah ${saldoAwal}, dan saldo dari rekening lain adalah ${saldoAkhir}, jika di total maka total saldo saya adalah ${totalSaldo}`)


// Array
// let nama = ["Muhammad", "Fahri", "Maulana"]
// nama.push('dea', 'fikri')
// nama.shift()
// nama.pop()

// let nama = []
// nama[0] = 'fahri'
// nama[1] = 'maulana'

// console.log(nama)

// Looping
// for loop
// const nama = ['Muhammad', 'Fahri', 'Maulana', 'Zidan', 'Al-Aziz']
// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i])
// }

// while loop
// let i = 0
// while (i < 10) {
//     i++
//     console.log('fahri')
// }

// do while loop
// let i = 0
// do {
//     i++
//     console.log('fahri')
// } while ( i < 10)

// Tugas kecil

// 1. prompt untuk mengetahui saldo akhir dari apa yang di inputkan oleh user
const saldoAwal = 1000000
const saldoSekarang = alert(`Saldo awal anda adalah Rp.${saldoAwal}`)

const barangA = prompt('Harga barang A adalah')
const barangB = prompt('Harga barang B adalah')

const hargaBarangA = parseInt(barangA)
const hargaBarangB = parseInt(barangB)
const totalBelanja = hargaBarangA + hargaBarangB

let saldoAkhir = saldoAwal - totalBelanja
alert(`Sisa saldo anda saat ini adalah Rp.${saldoAkhir}`)


// 2. menentukan hari dari tanggal yang ada saat ini
let hari = new Date().getDay()

switch (hari) {
    case 1:
        console.log('Sekarang hari Senin')
        break;
    case 2:
        console.log('Sekarang hari Selasa')
        break;
    case 3:
        console.log('Sekarang hari Rabu')
        break;
    case 4:
        console.log('Sekarang hari Kamis')
        break;
    case 5:
        console.log('Sekarang hari Jumat')
        break;
    case 6:
        console.log('Sekarang Hari Sabtu')
        break;
    case 7:
        console.log('Sekarang hari Minggu')
        break;
    default:
        break;
}
