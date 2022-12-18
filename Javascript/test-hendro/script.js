// Sorting Ascending
const nomor1 = [2, 5, 9, 1, 7];

for ( i = 0; i < nomor1.length; i++) {
  for ( j = 0; j < nomor1.length - i - 1; j++) {
    if (nomor1[j] > nomor1[j + 1]) {
      const temp = nomor1[j];
      nomor1[j] = nomor1[j + 1];
      nomor1[j + 1] = temp;
    }
  }
}

console.log(nomor1);

// Sorting Descending

const nomor2 = [2, 5, 9, 1, 7];

for ( i = 0; i < nomor2.length; i++) {
  for ( j = 0; j < nomor2.length - i - 1; j++) {
    if (nomor2[j] < nomor2[j + 1]) {
      const temp = nomor2[j];
      nomor2[j] = nomor2[j + 1];
      nomor2[j + 1] = temp;
    }
  }
}

console.log(nomor2);


