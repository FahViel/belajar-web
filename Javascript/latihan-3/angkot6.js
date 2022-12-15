var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if (noAngkot <= 6 && noAngkot !== 5 ) {
        console.log('Angkot No.' + noAngkot + ' Beroperasi dengan baik.');
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No.' + noAngkot + ' Angkot Sedang Lembur');
    }
    else {
        console.log('Angkot No.' + noAngkot + ' Keadaan Rusak');
    }
}
