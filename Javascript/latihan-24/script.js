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

// const nama = document.querySelector('.nama')
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')

// nama.innerHTML = huruf

// Rest paramter

// function myFunc(...myArgs) {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
//     // return myArgs
//     // return Array.from(arguments)

// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahKan(...angka) {
//     // let total = 0;

//     // for (const a of angka){
//     //     total += a;
//     // }

//     // return total

//     return angka.reduce((a, b) => a + b)
// }

// console.log(jumlahKan(1, 2, 3, 4, 5));

// Array Destructuring
// const kelompok1 = [`Muhammad`, `Fahri`, `Maulana`, `Zidan`, `Al-Aziz`]
// const [ketua, wakil, ...anggota] = kelompok1

// console.log(anggota);

// Object Destructuring
// const team = {
//     pm : `Muhammad`,
//     frontEnd1 : `Fahri`,
//     frontEnd2 : `Maulana`,
//     backEnd : `Zidan`,
//     ux : `Al-aziz`,
//     devOps : `Rahmatullah`
// }

// const {pm, ...myteam} = team
// console.log(myteam);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}
console.log(filterBy(`boolean`, 1, 2, `Fahri`, false, 10, true, `Maulana`));