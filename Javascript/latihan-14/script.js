// membuat Object
// Object literal

var mhs1 = {
    nama : "Fahri Maulana",
    nrp : "191080200179",
    email : "fahrimaulana007@gmail.com",
    jurusan : "Teknik Informatika"
};

var mhs2 = {
    nama : "Ari",
    nrp : "191080200178",
    email : "Ari@gmail.com",
    jurusan : "Teknik Informatika"
};

// Function declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {} ;
        mhs.nama = nama;
        mhs.nrp = nrp;
        mhs.email = email;
        mhs.jurusan = jurusan;

        return mhs;
}

var mhs3 = buatObjectMahasiswa("Afnizar", "191080200177", "Afnizar@gmail.com", "Teknik Informatika"); 


// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;

    //return this;
}

var mhs4 = new Mahasiswa('Gilang', '19108200176', 'gilang@gmail.com', 'Teknik Informatika')
