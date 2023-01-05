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
const mhs = {
    nama : `Fahri`,
    umur : 25,
    nim : `191080200179`,
    email : `fahrimaulana007@gmail.com`
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`

console.log(el);