// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
// Mencari angka >= 3
// for
// const newAngka = []
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i])
//   }
// }
// console.log(newAngka)


// Menggunakan Filter
// const newAngka = angka.filter(a => a >= 3) 
// console.log(newAngka);

// Menggunakan map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2)
// console.log(newAngka);

// Menggunakan Reduce
// Menjumlahkan seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(newAngka);


// Method Chaining
// cari angka > 5
// const hasil = angka.filter(a => a > 5)
//   // kalikan 3
//   .map(a => a * 3)
//   // jumlahkan
//   . reduce((acc, cur) => acc + cur)

//   console.log(hasil);


// Complex Study Case
// Ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pilih yang hanya Javascript lanjutan
let jslanjut = videos.filter( videos => videos.textContent.includes('JAVASCRIPT LANJUTAN'))
// ambil durasi masing" video
  .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit ke detik
  .map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':')
      .map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1]
  })
// jumlahkan semua detiknya
  .reduce((total, detik) => total + detik)

// ubah format jadi jam menit detik
const jam = Math.floor(jslanjut / 3600)
  jslanjut = jslanjut - jam * 3600
const menit = Math.floor(jslanjut / 60)
const detik = jslanjut - menit * 60

// simpan di DOM

const pDurasi = document.querySelector('.total-durasi')
  pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

const jmlVideo = videos.filter( videos => videos.textContent.includes('JAVASCRIPT LANJUTAN')).length

const pJmlVideo = document.querySelector('.jumlah-video')
  pJmlVideo.textContent = `${jmlVideo} Video.`


console.log(jmlVideo);