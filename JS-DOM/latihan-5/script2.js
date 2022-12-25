// function untuk pilihan komputer
function getPilihanKomputer() {
  const comp = Math.random()
  if (comp < 0.34) return 'gajah'
  if (comp >= 0.34 && comp < 0.67) return 'orang'
  return 'semut'
}

// function untuk rules game
function getHasil(comp, player) {
  if (player == comp) return 'SERI!'
  if (player == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!'
  if (player == 'orang') return comp == 'gajah' ? 'KALAH!' : 'MENANG!'
  if (player == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG!'
}

// membuat selection untuk pilihan gambar player
// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function() {
//   const pilihanKomputer = getPilihanKomputer()
//   const pilihanPlayer = pGajah.className
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer)

//   const imgComputer = document.querySelector('.img-komputer')
//   imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil;
// })

// membuat loading untuk random gambar komputer
function putar() {
  const imgComputer = document.querySelector('.img-komputer')
  const gambar = ['gajah', 'semut', 'orang']
  let i = 0
  const waktuMulai = new Date().getTime()
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval
      return
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
    if (i == gambar.length) i = 0
  }, 100)
}

// membuat selection untuk pilihan gambar player dengan loop
const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer()
    const pilihanPlayer = pil.className
    const hasil = getHasil(pilihanKomputer, pilihanPlayer)

    // memanggil function putar gambar
    putar()

    setTimeout(function () {
    const imgComputer = document.querySelector('.img-komputer')
    imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

    const info = document.querySelector('.info')
    info.innerHTML = hasil
    }, 1000)
  })
})
