// // DOM Events
// // Onclick
// const p3 = document.querySelector('.p3')

// function ubahWarnaP3() {
//   p3.style.backgroundColor = 'lightblue'
// }

// // using method
// const p2 = document.querySelector('.p2')
// function ubahWarnaP2() {
//   p2.style.backgroundColor = 'lightblue'
// }
// p2.onclick = ubahWarnaP2

// // using method addEventsListener
// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function () {
//   const ul = document.querySelector('section#b ul')

//   const liBaru = document.createElement('li')
//   const teksLiBaru = document.createTextNode('item baru')

//   liBaru.appendChild(teksLiBaru)
//   ul.appendChild(liBaru)
// })

const p3 = document.querySelector('.p3')
// p3.onclick = function () {
//   p3.style.backgroundColor = 'lightblue'
//   p3.style.color = 'red'
// }
p3.addEventListener('click', function () {
  p3.style.backgroundColor = 'lightblue'
  p3.style.color = 'red'
})