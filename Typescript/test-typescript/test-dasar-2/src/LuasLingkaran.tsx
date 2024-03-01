import { useState } from 'react'

export default function LuasLingkaran() {
  const [getPi, setGetPi] = useState<number>(0)
  const [getR2, setGetR2] = useState<number>(0)
  const [hasilLingkaran, setHasilLingkaran] = useState<number>(0)


  function buttonGenerate(pi: number, r2: number): void {
    const getR2: number = r2 * r2
    const jumlah: number = pi * getR2

    setHasilLingkaran(jumlah)

    setGetPi(0)
    setGetR2(0)
  }

  return (
    <>
      <h1>Hitung luas lingkaran</h1>
      <section>
        <div>
          <p>Masukkan pi</p>
          <input
            type="number"
            required
            value={getPi}
            onChange={(e) => {
              setGetPi(e.target.valueAsNumber)
            }}
          />
        </div>
        <div>
          <p>Masukkan r2</p>
          <input
            type="number"
            required
            value={getR2}
            onChange={(e) => {
              setGetR2(e.target.valueAsNumber)
            }}
          />
        </div>
        <br />
        <div>
          <button onClick={() => buttonGenerate(getPi, getR2)}>Generate</button>
        </div>
      </section>

      <section>
        <p>Hasil dari luas lingkaran adalah {hasilLingkaran}</p>
      </section>
    </>
  )
}
