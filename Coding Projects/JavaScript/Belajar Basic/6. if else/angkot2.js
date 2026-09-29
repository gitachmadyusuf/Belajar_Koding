var jmlAngkot = 20;
var angkotBeroperasi = 12;
var noAngkot = 1;

while( noAngkot <=  angkotBeroperasi ) {
    console.log('Angkot No. ' + noAngkot +' beroperasi dengan baik.');

noAngkot++; //sederhana dari noANgkot = noAngkot + 1; atau noaAngkot += 1;
}

for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}