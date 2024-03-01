// console.log(document.title)
// document.title = 'Muhammad Fahri Maulana'
// console.log(document.title)

// DOM 
// test DOM
// const body = document.body
// body.append('Hello World')

// DOM Create element
// const body = document.body
// const h1 = document.createElement('h1') // create = <h1></h1>
// h1.textContent = '<marquee>Hello World H1</marquee>' // memasukkan text = <h1>Hello World H1</h1>

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = '<marquee>Muhammad Fahri Maulana</marquee>'

// const namaAdik = document.createElement('b')
// namaAdik.innerText = '<marquee>Zidan</marquee>'

// body.append(h1) // Menampilkan isi H1
// body.append(namaSaya) // text bergerak karna marquee adalah element dari html
// body.append(namaAdik)



// DOM Klik
const body = document.body

const button1 = document.getElementById('btn1')

const defaultTeks = 'Klik saya 1'

button1.style.border = 'none'
button1.style.padding = '8px'
button1.style.fontSize = '24px'
button1.style.background = 'tomato'

function clickButton(){
    button1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'Halo guys huehue'
    body.append(newText)
}

function gantiTeks (){
    button1.textContent = 'hiyaaa'
}

function oriTeks(){
    button1.textContent = defaultTeks
}



// Tugas
// munculkan element html baru dengan isi berupa teks berisi nama kalian,
// ketika mouse berada di button 2, lalu ketika mouse keluar dari button
// ubah warna teks yang baru

// const body = document.body
const button2 = document.querySelector('.btn2')

const firstTeks = 'Tambah Teks Berhasil'
let teks

function tambahTeks() {
    teks = document.createElement('h2')
    teks.innerHTML = firstTeks
    teks.style.color = 'blue'
    body.append(teks)
}

function gantiWarnaTeks() {
    if(teks){
        teks.style.color = 'black'
    }
}



