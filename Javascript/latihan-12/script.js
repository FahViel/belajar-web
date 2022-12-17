var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == 0) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama penumpang yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesahalannya
        console.log(namaPenumpang + ' sudah ada di dalam angkot.')
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else if (i == penumpang.lenght - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang)
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.lenght == 0) {
    // tampilkan pesan bahwa angkot kosong, dan
    // tidak mungkin ada penumpang turun
    console.log('Angkot masih kosong.');
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.lenght; i++) {
      //jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya,
        // menjadi undefined
        penumpang[i] = 0;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika tidak ada nama yang sesuai
      else if (i == penumpang.lenght - 1) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' tidak ada di dalam angkot.');
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
}
