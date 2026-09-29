var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');
	
switch(item) {
	case 'daging' :
	case 'nasi' :
	case 'susu' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'burger' :	
	case 'softdrink' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default :
		alert('Anda memasukkan nama makanan / minuman yang salah!');
		break;
}