// Cara membuat Object pada Javascript
// 1. Object literal
// let mahasiswa = {
//     nama : 'Fahri',
//     energi : 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration
// function mahasiswa(nama, energi) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, Selamat makan!!`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }

//     return mahasiswa
// }

// let fahri = mahasiswa('fahri Maulana', 10)

// 3. Constructor Function
// method new
// function mahasiswa(nama, energi) {
//   this.nama = nama
//   this.energi = energi

//   this.makan = function (porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama}, Selamat makan!!`)
//   }
//   this.main = function (jam) {
//     this.energi -= jam
//     console.log(`Halo ${this.nama}, Selamat Bermain`)
//   }
// }

// let fahri = new mahasiswa('Fahri', 10)

// 4. Object.create()
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi
    console.log(`Halo ${this.nama}, Selamat Makan`);
  },


  main: function (jam) {
    this.energi -= jam
    console.log(`Halo ${this.nama}, Selamat Bermain`);
  },
  
  tidur: function (jam) {
    this.energi += jam * 2
    console.log(`Halo ${this.nama}, Selamat Bermain`);
  }
}

function mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa)
    mahasiswa.nama = nama
    mahasiswa.energi = energi

    return mahasiswa
}

let fahri = mahasiswa('fahri Maulana', 10)
