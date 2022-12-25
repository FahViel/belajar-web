// Membuat tombol delete berfungsi
// const close = document.querySelector('.close')
// const card = document.querySelector('.card')

// close.addEventListener('click', function () {
//     card.style.display = 'none'
// })

// Menggunakan Dom Traversal

const close = document.querySelectorAll('.close')
// Menggunakan .target
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function(e) {
//     // close[i].parentElement.style.display = 'none'
//     e.target.parentElement.style.display = 'none'
//   })
// }

// Menggunakan array
close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none'
  })
})

// Mencoba method DOM Traversal
const nama = document.querySelector('.nama')
console.log(nama.nextElementSibling);

