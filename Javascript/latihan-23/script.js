// for..of
// const mhs = [`Fahri`, `Zidan`, `Maulana`]

// for( let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// mhs.forEach(m => {
//     console.log(m);
// });

// for( const m of mhs ){
//     console.log(m);
// }

// string
// const nama = `fahri`
// for ( const n of nama){
//     console.log(n);
// }

// const mhs = [`Fahri`, `Zidan`, `Maulana`]
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// })

// for (const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama')
// for ( n of liNama){
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka(){
//     // return arguments.reduce(a ,i) => a + 1;
//     // arguments.forEach(a => jumlah += a)
//     let jumlah = 0
//     for( a of arguments){
//         jumlah += a
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For.. in
// const mhs = {
//     nama : `Fahri`,
//     umur : `25`,
//     email : `fahri@gmail.com`
// }

// for ( m in mhs){
//     console.log(mhs[m]);
// }