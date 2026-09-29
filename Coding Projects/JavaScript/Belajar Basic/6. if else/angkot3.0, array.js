var jmlAngkot = 20;
var angkotBeroperasi = 12;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}

//arrray
const buah = ["Apel", "Mangga", "Pisang", "Jeruk"]; // membuat array dengan tanda kurung siku []
for (let i = 0; i < buah.length; i++) {
  console.log("Saya suka buah " + buah[i]);
}

//pengembanagan for dari komentar video pembelajaran
var operasi1 = ' beroperasi dengan baik.';
var operasi2 = ' sedang tidak beroperasi.';
var operasi3 = ' sedang lembur.';
var jumlahAngkot = 10;

for (var angkot = 1; angkot <= jumlahAngkot ; angkot++) {
    if (angkot <= 6) {
        var aksi = operasi1;
    } else if (angkot === 8) {
        var aksi = operasi3;
    } else {
        var aksi = operasi2;
    };
    console.log('Angkot No. ' + angkot + aksi);
};

//contoh pengkondisian
var angka = prompt('Masukkan angka:');

if( angka % 2 === 0) {
	alert( angka + ' adalah bilangan GENAP');
} else if( angka % 2 === 1){
	alert( angka + ' adalah bilangan GANJIL');
} else {
    alert('yang anda masukkan bukan angka!');
}