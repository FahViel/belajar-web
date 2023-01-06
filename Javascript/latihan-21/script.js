// Tempalte Literals / Template String
// Contoh sederhana
// const nama = `Fahri`
// const umur = `25`
// console.log(`Halo Nama Saya ${nama}, Umur saya ${umur}`);

// Embeded Expression
// console.log(`${alert(`Halo!!`)}`);
// const x = 10
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragment
// const mhs = {
//     nama : `Fahri`,
//     umur : 25,
//     nim : `191080200179`,
//     email : `fahrimaulana007@gmail.com`
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// console.log(el);

// Study Case HTML Fragment
// 1. HTML Fragment
// const mhs = {
//     nama : `Fahri`,
//     umur : 25,
//     nim : `191080200179`,
//     email : `fahrimaulana007@gmail.com`
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`

// 2. Looping
// const mhs = [
//     {
//     nama : `Fahri`,
//     email : `fahrimaulana007@gmail.com`
//     },

//     {
//     nama : `Zidan`,
//     email : `zidan@gmail.com`
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map( m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditionals
// Ternary
// const lagu = {
//     judul : 'Tetap dalam jiwa',
//     penyanyi : 'Isyana',
//     feat : `Rayi Putra`
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragment Bersarang
const mhs = {
  nama: `Fahri`,
  semester: 5,
  mataKuliah : [
    'Rekayasa Web',
    `RPL`, 
    `Pemrogaman sistem Interaktif`, 
    `PBO`
  ]
}

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
      ${mataKuliah.map( mk => `<li>${mk}</li>`).join('')}
    </ol>
  `
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester : ${mhs.semester}</span>
  <h4>Mata Kuliah :</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el
