// Membuat tombol untuk merubah warna document
const tombolUbahWarna = document.getElementById('tombolUbahWarna')
tombolUbahWarna.onclick = function () {
  // document.body.style.backgroundColor = 'lightblue'
  // document.body.setAttribute('class', 'biru-muda')
  document.body.classList.toggle('biru-muda')
}

// membuat tombol untuk membuat warna random
const tombolAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('acak warna')
tombolAcakWarna.appendChild(teksTombol)
tombolAcakWarna.setAttribute('type', 'button')
tombolUbahWarna.after(tombolAcakWarna)

tombolAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1)
  const g = Math.round(Math.random() * 255 + 1)
  const b = Math.round(Math.random() * 255 + 1)
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})


// membuat warna dengan HTML5 slider
const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function () {
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})

sHijau.addEventListener('input', function () {
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})

sBiru.addEventListener('input', function () {
  const r = sMerah.value
  const g = sHijau.value
  const b = sBiru.value
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})

// bermain dengan mouse untuk merubah warna

document.body.addEventListener('mousemove', function(event) {
  // posisi mouse

  const xPos = Math.round(event.clientX / window.innerWidth * 255)
  const yPos = Math.round(event.clientX / window.innerHeight * 255)
  document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)'
})