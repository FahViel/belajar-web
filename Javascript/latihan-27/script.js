// $.ajax({
//     url : `http://www.omdbapi.com/?apikey=dca61bcc&s=avengers`,
//     success: movies => console.log(movies)
// })

// fetch
// fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=avengers`)
// .then(response => response.json())
// .then(response => console.log(response))

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
// states (fullfiled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji di tepati ')
//     } else {
//         reject('ingkar janji..')
//     }
// })
// janji1
//     .then(response => console.log(`Oke ` + response))
//     .catch(response => console.log(`Not Oke ` + response))

// contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve(`Ditepati setelah beberapa waktu`)
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve(`Tidak Ditepati setelah beberapa waktu`)
//         }, 2000);
//     }
// })

// console.log(`mulai`);
// // console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log(`Selesai Menunggu`))
//     .then(response => console.log(`Oke ` + response))
//     .catch(response => console.log(`Not Oke ` + response))
// console.log(`selesai`);

// Promise.all()
// const film = new Promise( resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul : `Avenger`,
//             sutradara : `Fahri`,
//             pemeran : `Muhammad, Maulana`
//         }])
//     }, 1000);
// })

// const cuaca = new Promise( resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota : `Sidoarjo`,
//             temp : 31,
//             kondisi :`Cerah`
//         }])
//     }, 500);
// })

// Promise.all([film, cuaca])
//     // .then( response => console.log(response))
//     .then(response => {
//         const [film, cuaca] = response
//         console.log(film)
//         console.log(cuaca)
//     })