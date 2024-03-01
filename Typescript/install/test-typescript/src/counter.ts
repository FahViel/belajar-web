// @ts-check

const namaSaya: string = 'Fahri'
const username: number = 12345

console.log({ namaSaya })
console.log({ username })

function angka(a: number, b: number): number {
  return a + b
}

console.log(angka(1, 2))

// penggunaan array normal
let namaKeluarga: string[]
namaKeluarga = [`fahri`, `zidan`, `maria`]

console.log({ namaKeluarga })

// penggunaan tuple array
let acakArray: [string, number, boolean]
acakArray = [`Fahri`, 2, true]

console.log(acakArray)

// Tipe data Custom
type TemanType = {
  nama: string
  isKampret: boolean
  hutang?: number
}

let temanKita: TemanType[]

temanKita = [
  {
    nama: 'Fahri',
    isKampret: true,
    hutang: 50000,
  },
  {
    nama: 'Zidan',
    isKampret: false,
  },
]

console.log({ temanKita })

// function dengan tipe data
function perkalian(a: number, b: number): number {
  return a * b
}

console.log(perkalian(2, 4))

// dengan arrow function
const perkalian2 = (a: number, b: number): number => {return a * b}

console.log(perkalian2(4, 5))

// Test function 
function add(a: number, b: number): string {
  const jumlah: number = a * b
  const hasil: string = `Hasil nya adalah ${jumlah}`

  return hasil
}
console.log(add(11, 20))

// menggunakan interface 
interface IProsessor {
  brand: string,
  basedModel: string,
  modelName: string,
  clockSize: number,
}

interface Intel extends IProsessor {
  turboBoost: boolean
}

interface AMD extends IProsessor {
  precisionBoost: boolean
}

const intelCoreI5 = {
  brand: "intel",
  basedModel: "core I5",
  modelName: "i5-4430H",
  clockSize: 4,
  turboBoost: true
}

const amdA6 = {
  brand: "AMD",
  basedModel: "A6",
  modelName: "123300",
  clockSize: 5,
  precisionBoost: true
}

function createProcessorIntel(processor: Intel): string{
  const brand = processor.brand
  const basedModel = processor.basedModel
  const modelName = processor.modelName
  const clockSize = `${processor.clockSize}Ghz`
  const turboBoost = processor.turboBoost

  const hasil = `hasil nya adalah ${brand} ${basedModel} ${modelName} ${clockSize} apakah ada turbo boost = ${turboBoost}`

  return hasil
}

function createProcessorAMD(processor: AMD): string{
  const brand = processor.brand
  const basedModel = processor.basedModel
  const modelName = processor.modelName
  const clockSize = `${processor.clockSize}Ghz`
  const turboBoost = processor.precisionBoost

  const hasil = `hasil nya adalah ${brand} ${basedModel} ${modelName} ${clockSize} apakah ada precision boost = ${turboBoost}`

  return hasil
}

console.log(createProcessorIntel(intelCoreI5))
console.log(createProcessorAMD(amdA6))