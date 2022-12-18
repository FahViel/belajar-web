const nomor1 = [2, 5, 9, 1, 7];

nomor1.sort(function(a, b) {
  return a - b;
});

console.log(nomor1);

const nomor2 = [2, 5, 9, 1, 7];

nomor2.sort(function(a, b) {
  return b - a;
});

console.log(nomor2); // Output: [9, 7, 5, 2, 1]

