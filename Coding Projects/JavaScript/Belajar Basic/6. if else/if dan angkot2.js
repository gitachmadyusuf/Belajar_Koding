var angka = 1; //kita punya variabel agka dengan nilai 1

if(angka === 1) { //kita cek apakah nilai angka sama dengan 1} ini adalah operator pembanding dan operator indetitas yang artinya kita cek apakah nilai angka sama dengan 1 dan tipe datanya juga sama dengan 1
	alert('anda memasukkan angka 1');
}


//tidak muncul karena kondisi if tidak terpenuhi
var angka = 2; //jika kita masukkan angka 2 maka tidak akan muncul alert (tidak dikerjakan) karena kondisi if tidak terpenuhi
if (angka === 1) {
	alert('anda memasukkan angka 1')
}

var angka = 2;
if (angka < 5) {
	alert(angka + ' lebih kecil dari 5')
}

var angka = 7;
if (angka < 5) {
	alert( angka + ' lebih kecil dari 5')
} else {
	alert('anda tidak memasukkan angka kurang dari 5')
}

//buat program untuk mengecek apakah sebuah angka itu genap atau ganjil👇
var angka = 2;
if (angka % 2 === 0) {
	alert( angka + ' adalah bilangan genap')
}

//cara lain tidak menggunakan cara di atas menggunakan 'else'
var angka = 3;

if(angka % 2 == 0) {
	alert(angka + ' adalah bilangan GENAP');
} else {
	alert(angka + ' adalah bilangan GANJIL');
}

//Angkot beroperasi dan angkot yang tidak
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= jmlAngkot) {

	if (noAngkot <= angkotBeroperasi) {
		alert('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	} else 	{
		alert('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');	
	}

	noAngkot++;
}
