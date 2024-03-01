// @ts-check

import { useEffect, useState } from 'react'
import './App.css'

export default function Test2() {
  const [angkaHari, setAngkaHari] = useState<number>()
  const [namaHari, setNamaHari] = useState<string>('')

  let hari = new Date().getDay()

  useEffect(() => {
    const dates = hari
    setAngkaHari(dates)

    let nomorHari = angkaHari

    switch (nomorHari) {
      case 1:
        setNamaHari('Senin')
        break
      case 2:
        setNamaHari('Selasa')
        break
      case 3:
        setNamaHari('Rabu')
        break
      case 4:
        setNamaHari('Kamis')
        break
      case 5:
        setNamaHari('Jumat')
        break
      case 6:
        setNamaHari('Sabtu')
        break
      case 7:
        setNamaHari('Minggu')
        break
      default:
        break
  }
  })

  return (
    <>
      <h2>Test 2</h2>
      <p>Tentukan hari</p>
      <section>
        <p>Maka sekarang adalah hari {namaHari}</p>
      </section>
    </>
  )
}
