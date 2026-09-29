var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= jmlAngkot) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
    } else if (noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi.');
    }
    noAngkot++;
}