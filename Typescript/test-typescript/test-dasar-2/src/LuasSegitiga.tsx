import { useState } from 'react'

export default function LuasSegitiga() {
  const [getLuas, setGetluas] = useState<number>(0)
  const [getAlas, setGetAlas] = useState<number>(0)
  const [getTinggi, setGetTinggi] = useState<number>(0)
  const [hasilSegitiga, setHasilSegitiga] = useState<number>(0)

  function buttonGenerate(luas: number, alas: number, tinggi: number): void{
    const getData: number = alas * tinggi
    const jumlah: number = luas * getData

    setHasilSegitiga(jumlah)

    setGetluas(0)
    setGetAlas(0)
    setGetTinggi(0)
  }

  return (
    <>
      <h1>Hitung Luas Segitiga</h1>
      <section>
        <div>
          <p>Masukkan Jumlah Luas</p>
          <input
            type="number"
            required
            value={getLuas}
            onChange={(event) => {
              setGetluas(event.target.valueAsNumber)
            }}
          />
        </div>

        <div>
          <p>Masukkan Jumlah Alas</p>
          <input
            type="number"
            required
            value={getAlas}
            onChange={(event) => {
              setGetAlas(event.target.valueAsNumber)
            }}
          />
        </div>

        <div>
          <p>Masukkan Jumlah Tinggi</p>
          <input
            type="number"
            required
            value={getTinggi}
            onChange={(event) => {
              setGetTinggi(event.target.valueAsNumber)
            }}
          />
        </div>

        <br />

        <div>
          <button onClick={() => buttonGenerate(getAlas, getLuas, getTinggi)}>Generate</button>
        </div>
      </section>

      <section>
        <div>
          <p>Hasil Luas Segitiga Adalah {hasilSegitiga} cm</p>
        </div>
      </section>
    </>
  )
}
