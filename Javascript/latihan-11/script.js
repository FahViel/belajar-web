// Manipulasi Array

// 1. Menambah isi Array

// var arr = ["a", 1, true];

// console.log(arr);

// 2. Menghapus isi Array

// var arr = ["Muhammad", "Fahri", "Maulana"];
// arr[1] = undefined;

// console.log(arr);

//3. Menampilkan isi array
// var arr = ["Muhammad", "Fahri", "Maulana"];

// for (var i =0; i < arr.length; i++ ){
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
    
// }

// Method pada Array

// 1. Join
    // console.log(arr.join(' '));

// 2. Push & Pop
// arr.push("Ari");
// arr.pop();

// 3. Unshift & Shift
// arr.unshift('Ari');
// arr.shift();

// console.log(arr.join(' '));

// var arr = ["Muhammad", "Fahri", "Maulana"];

// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// arr.splice(1, 2, 'Ari', 'Nizar');
// console.log(arr.join(' '));

// 5. Slice
// slice(awal, akhir)
var arr = ["Muhammad", "Fahri", "Maulana","Ari", "Nizar"];

var arr2 = arr.slice(1,4);

console.log(arr.join(' '));
console.log(arr2.join(' '));