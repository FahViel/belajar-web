// @ts-check

import { useState } from 'react'
import './App.css'

export default function Test1() {
  const [saldoAwal, setSaldoAwal] = useState<number>(0)
  const [inputSaldoAwal, setInputSaldoAwal] = useState<number>(0)
  const [hargaBarangA, setHargaBarangA] = useState<number>(0)
  const [hargaBarangB, setHargaBarangB] = useState<number>(0)
  const [totalSaldoAkhir, setTotalSaldoAkhir] = useState<number>(0)

  function totalAkhir(hargaA: number, hargaB: number): any {
    let totalBelanja: number = hargaA + hargaB
    let saldoAkhir: number = saldoAwal - totalBelanja
    setTotalSaldoAkhir(saldoAkhir)

    setHargaBarangA(0)
    setHargaBarangB(0)
  }

  function klikSaldoAwal(saldo: number): any {
    let initSaldo: number = saldo
    setSaldoAwal(initSaldo)

    setInputSaldoAwal(0)
  }

  const rupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(angka)
  }

  return (
    <>
      <h2>Test 1 Input Output Harga Barang</h2>
      <section>
        <p>Masukkan Saldo Awal</p>
        <input
          type="number"
          value={inputSaldoAwal}
          onChange={(e) => {
            setInputSaldoAwal(e.target.valueAsNumber)
          }}
        />
        <br />
        <br />
        <button onClick={() => klikSaldoAwal(inputSaldoAwal)}>Input</button>
      </section>
      <h3>Total Saldo Awal adalah {rupiah(saldoAwal)}</h3>
      <section>
        <p>Masukkan Harga Barang A</p>
        <input
          type="number"
          value={hargaBarangA}
          onChange={(e) => {
            setHargaBarangA(e.target.valueAsNumber)
          }}
        />
      </section>

      <section>
        <p>Masukkan Harga Barang B</p>
        <input
          type="number"
          value={hargaBarangB}
          onChange={(e) => {
            setHargaBarangB(e.target.valueAsNumber)
          }}
        />
      </section>

      <br />

      <section>
        <button onClick={() => totalAkhir(hargaBarangA, hargaBarangB)}>Generate</button>
      </section>

      <section>
        <h3>Sisa Saldo anda adalah {rupiah(totalSaldoAkhir)}</h3>
      </section>
    </>
  )
}
