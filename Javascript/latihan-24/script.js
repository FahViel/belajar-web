// Spread Operator
// Memecah iterables menjadi single element

// console.log(...mhs[0]);

// Menggabungkan 2 Array
// const mhs = [`Muhammad`, `Fahri`, `Maulana`]
// const dosen = [`Maulana`, `Fahri`, `Muhammad`]
// const orang = [...mhs, ...dosen]

// const orang = mhs.concat(dosen)
// console.log(orang);

// Mengcopy array
// const mhs = [`Muhammad`, `Fahri`, `Maulana`]
// // const mhs1 = mhs

// const mhs1 = [...mhs]
// mhs1[0] = `Zidan`
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li')
// const mhs = []

// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs);

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')

nama.innerHTML = huruf
