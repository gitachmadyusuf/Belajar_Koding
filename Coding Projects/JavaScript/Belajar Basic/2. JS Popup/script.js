//penggunaan alert
alert('Selamat Datang');
var lagi = true;
while(lagi===true){
	var nama = prompt('masukan nama :');
	if(nama == null){
		lagi = false;        
        } else if(nama == ""){
		alert('masukan nama kamu');
	} else {
		alert('halo '+nama);
        lagi = confirm('coba lagi?');        
      }
}

//pengulangan dengan keyword 'for'
alert('Mulai');

for(var i = 0; i < 5; i++) {
    alert('Hello World!');
}

alert('Selesai');

//contoh pengkondisian
var angka = prompt ('Masukkan angka :');
if( angka %2 === 0 ) {
	alert(angka + ' adalah bilangan GENAP');
} else {
	alert(angka + ' adalah bilangan GANJIL');
}