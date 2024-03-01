import { useState } from 'react'

export default function LuasJajarGenjang() {
  const [getAlas, setGetAlas] = useState<number>(0)
  const [getTinggi, setGetTinggi] = useState<number>(0)
  const [hasilJajarGenjang, setHasilJajarGenjang] = useState<number>(0)

  function buttonGenerate(alas: number, tinggi: number): void{
    const jumlah: number = alas * tinggi

    setHasilJajarGenjang(jumlah)

    setGetAlas(0)
    setGetTinggi(0)
  }

  return (
    <>
      <h1>Hitung Luas Jajar Genjang</h1>
      <section>
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
          <button onClick={() => buttonGenerate(getAlas, getTinggi)}>Generate</button>
        </div>
      </section>

      <section>
        <div>
          <p>Hasil Luas Jajar Genjang adalah {hasilJajarGenjang}</p>
        </div>
      </section>
    </>
  )
}
