import { useState } from 'react'

export default function LuasPersegiPanjang() {
  const [getPanjang, setGetPanjang] = useState<number>(0)
  const [getLebar, setGetLebar] = useState<number>(0)
  const [hasilPersegiPanjang, setHasilPersegiPanjang] = useState<number>(0)

  function buttonGenerate(panjang: number, lebar: number): void {
    const jumlah: number = panjang * lebar

    setHasilPersegiPanjang(jumlah)

    setGetPanjang(0)
    setGetLebar(0)
  }

  return (
    <>
      <h1>Hitung Luas Persegi Panjang</h1>
      <section>
        <div>
          <p>Masukkan Jumlah Panjang</p>
          <input
            type="number"
            required
            value={getPanjang}
            onChange={(event) => {
              setGetPanjang(event.target.valueAsNumber)
            }}
          />
        </div>

        <div>
          <p>Masukkan Jumlah Lebar</p>
          <input
            type="number"
            required
            value={getLebar}
            onChange={(event) => {
              setGetLebar(event.target.valueAsNumber)
            }}
          />
        </div>

        <br />

        <div>
          <button onClick={() => buttonGenerate(getPanjang, getLebar)}>Generate</button>
        </div>
      </section>

      <section>
        <div>
          <p>Hasil Luas Persegi Panjang adalah {hasilPersegiPanjang} cm</p>
        </div>
      </section>
    </>
  )
}
