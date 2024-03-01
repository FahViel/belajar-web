// Array test
const test = ['Muhammad', 'Fahri', 'Maulana']
console.log(test)

// Test Array Kosong
// const arrBlank = []
// arrBlank[0] = 'Muhammad'
// arrBlank[1] = 'Fahri'
// arrBlank[2] = 'Maulana'
// console.log(arrBlank)

// Test membuat array kosong
// const newArray = new Array()
// newArray[0] = 'Muhammad'
// newArray[1] = 'Fahri'
// console.log(newArray)

// Test kelola Array
// const arrBuah = ['Apel', 'Mangga', 'Apukat']
// const mangga = arrBuah.includes('Mangga')

// if (mangga) {
//     const posisiMangga = arrBuah.indexOf('Mangga')
//     const idxBefore = posisiMangga - 1
//     const idxAfter = posisiMangga + 1
//     const before = arrBuah[idxBefore]
//     const after = arrBuah[idxAfter]
//     console.log(`buah sebelum mangga adalah ${before}`)
//     console.log(`buah setelah mangga adalah ${after}`)
//     console.log(`Posis apel berada di index = ${posisiMangga}`)
// } else {
//     console.log(`Tidak ada posisi`)
// }

// Mencari key dalam array of index
// const arrBuah = []
// arrBuah['Aple'] = 'Apel'
// arrBuah['Mango'] = 'Mangga'
// arrBuah['Watermelon'] = 'Semangka'
// console.log(arrBuah['Aple'])

// Shallow copy Array
// const arrBuah = ['Apel', 'Mangga', 'Apukat'] // Data original
// const newArrayBuah = [...arrBuah] // Data KW, gunakan spread operator, slice, atau JSON.stringify()

// newArrayBuah[0] = 'Semangka'

// console.log({arrBuah})
// console.log({newArrayBuah})


// Test Array Beragam
// const arrSaya = ['Apel', 10 , {nama: function () {console.log('fahri')}} , 'Apukat', 22, 'Semangka', ['Muhammad', 'Fahri']]
// arrSaya[2].nama() // output fahri


// Test Merge Array
// const arrBuah = ['Apel', 'Mangga', 'Apukat']
// const arrMakanan = ['Nasi', 'Mie', 'Capcay']

// const mergeArray = arrBuah.concat(arrMakanan)

// for (list of mergeArray) //gunakan of untuk mencari isi dari array berupa object dan in untuk mencari index dari isi dalam array
// console.log(list)

// mergeArray.map((value, index) => console.log(value, index))