// DOM Manipulation

// element.InnerHTML 
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Fahri Maulana</em>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'Hello World'

// element.style.<property CSS>
// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'

// element.getAttribute()
// element.setAttribute()
// element.removeAttribute()
// element.classList()

// const judul = document.getElementsByTagName('h1')[0]
// const a = document.querySelector('section#a a')

const p2 = document.querySelector('.p2')
p2.classList.add('label')
p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('tiga')

p2.classList.replace('tiga', 'empat')