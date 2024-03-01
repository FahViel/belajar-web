import { useState } from 'react'

export default function JumlahGajiKaryawan() {
  const [getNamaKaryawan, setGetNamaKaryawan] = useState<string>('')
  const [getGaji, setGetGaji] = useState<number>(0)
  const [getAbsensi, setGetAbsensi] = useState<number>(0)

  // Get State datas
  const [hasilNamaKaryawan, setHasilNamaKaryawan] = useState<string>('')
  const [jumlahGaji, setJumlahGaji] = useState<number>(0)

  function buttonGenerate(namaKaryawan: string, gaji: number, absensi: number): void {
    // ambil nama karyawan
    const namas: string = namaKaryawan

    // hitung data gaji dan absensi
    const jmlGaji: number = gaji * absensi

    // masukkan hasil ke setter
    setHasilNamaKaryawan(namas)
    setJumlahGaji(jmlGaji)

    setGetNamaKaryawan('')
    setGetGaji(0)
    setGetAbsensi(0)
  }

  // Rubah ke IDR
  const rupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(angka).replace(/(\.|,)00$/g, '')
  }

  return (
    <>
      <h1>Hitung Gaji Karyawan</h1>
      <section>
        <div>
          <p>Masukkan Nama Karyawan</p>
          <input
            type="text"
            required
            value={getNamaKaryawan}
            onChange={(event) => {
              setGetNamaKaryawan(event.target.value)
            }}
          />
        </div>

        <div>
          <p>Masukkan Gaji Per-Hari</p>
          <input
            type="number"
            required
            value={getGaji}
            onChange={(event) => {
              setGetGaji(event.target.valueAsNumber)
            }}
          />
        </div>

        <div>
          <p>Masukkan Jumlah Absensi</p>
          <input
            type="number"
            required
            value={getAbsensi}
            onChange={(event) => {
              setGetAbsensi(event.target.valueAsNumber)
            }}
          />
        </div>

        <br />

        <div>
          <button onClick={() => buttonGenerate(getNamaKaryawan, getGaji, getAbsensi)}>Generate</button>
        </div>
      </section>

      <section>
        <div>
          <p>
            Total Gaji Karyawan yang Bernama {hasilNamaKaryawan} Sejumlah {rupiah(jumlahGaji)}
          </p>
        </div>
      </section>
    </>
  )
}
