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

// Mencari nilai terbesar

var nomor3 = [2, 5, 9, 1, 7];
var nilaiTerbesar = nomor3[0];

for ( i = 1; i < nomor3.length; i++) {
  if (nomor3[i] > nilaiTerbesar) {
    nilaiTerbesar = nomor3[i];
  }
}

console.log(nilaiTerbesar); 

// n = 10, menampilkan bilangan dan menjumlahkan nya 

var n = 10;
var sum = 0;
var output = "";

for ( i = 1; i <= n; i++) {
  sum += i;
  if (i == 2) continue; {
    output += i + " + ";
  }
}

output = output.substring(0, output.length - 3);
console.log(output + " = " + sum);
