// Destructuring

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b]
// }

// const jumlah = penjumlahanPerkalian(2, 3);
// console.log(jumlah);

// const [jumlah, kali] =penjumlahanPerkalian(2, 3)
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3)
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3)
// console.log(kurang);

// Destructuring Function Arguments

const mhs1 = {
  nama: `Fahri`,
  umur: `25`,
  email: `fahri@gmail.com`,
  nilai: {
    tugas : 80,
    uts : 85,
    uas : 75
  }
}

// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur))


function cetakMhs({ nama, umur, nilai: {tugas, uts, uas}}) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai saya adalah ${tugas}, ${uts}, ${uas}`
}

console.log(cetakMhs(mhs1))