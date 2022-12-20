// DOM Manipulation part 1

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

// const p2 = document.querySelector('.p2')
// p2.classList.add('label')
// p2.classList.add('satu')
// p2.classList.add('dua')
// p2.classList.add('tiga')

// p2.classList.replace('tiga', 'empat')

// DOM Manipulation part 2

// buat element baru
const pBaru = document.createElement('p')
const teksPBaru = document.createTextNode('Paragraf Baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

// buat element baru
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item Baru')
// simpan tulisan ke dalam liBaru
liBaru.appendChild(teksLiBaru)
// pilih lokasi yang akan di tempatkan liBaru
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')
// Masukkan liBaru dan tulisannya ke tempat yang sudah di tentukan
ul.insertBefore(liBaru, li2)

// use removeChild
// pilih element yang akan di hapus
const link = document.getElementsByTagName('a')[0]
// Menghapus element yang di pilih
sectionA.removeChild(link)

// use replaceChild
// membuat element baru
const sectionB = document.getElementById('b')
// memilih paragraf (section#b p) yang akan di ganti
const p4 = sectionB.querySelector('p')
// membuat element h2Baru
const h2Baru = document.createElement('h2')
// mengisi teks yang akan di ganti
const teksH2Baru = document.createTextNode('Judul Baru!')
// memasukkan teks ke dalam element baru
h2Baru.appendChild(teksH2Baru)
// mengganti teks paragraf lama ke teks h2Baru
sectionB.replaceChild(h2Baru, p4)
