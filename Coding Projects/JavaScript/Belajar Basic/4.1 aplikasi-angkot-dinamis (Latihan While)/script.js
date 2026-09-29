// script.js

// 1. Ambil referensi ke elemen container tempat angkot akan ditambahkan
const angkotContainer = document.querySelector('.angkot-container');

// Pastikan container ditemukan sebelum melanjutkan
if (!angkotContainer) {
    console.error("Error: Elemen '.angkot-container' tidak ditemukan di HTML. Pastikan Anda memiliki <div class='angkot-container'> di index.html");
}

// Inisialisasi variabel untuk loop angkot
var angkot = 1;
const totalAngkot = 10; // Jumlah angkot yang ingin dibuat

// Gunakan while loop untuk membuat dan menambahkan setiap angkot
while (angkot <= totalAngkot) {
    // 2. Buat elemen 'div' baru untuk setiap angkot item
    const angkotItem = document.createElement('div');
    angkotItem.classList.add('angkot-item'); // Tambahkan class CSS untuk styling

    // 3. Buat elemen 'p' baru untuk nomor angkot
    const angkotNumber = document.createElement('p');
    angkotNumber.classList.add('angkot-number'); // Tambahkan class CSS untuk styling
    angkotNumber.textContent = angkot; // Set teks nomor angkot

    // 4. Buat elemen 'img' baru untuk gambar angkot
    const angkotImage = document.createElement('img');
    angkotImage.src = 'angkot_hummer.png'; // Set sumber gambar
    angkotImage.alt = `Angkot Hummer No. ${angkot}`; // Set teks alternatif

    // 5. Tambahkan elemen nomor dan gambar ke dalam div angkotItem
    angkotItem.appendChild(angkotNumber);
    angkotItem.appendChild(angkotImage);

    // 6. Tambahkan div angkotItem yang sudah lengkap ke dalam angkotContainer di HTML
    if (angkotContainer) { // Periksa kembali apakah container ditemukan
        angkotContainer.appendChild(angkotItem);
    }

    // Tampilkan pesan di konsol (sesuai dengan JavaScript awalmu)
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');

    // Lanjutkan ke angkot berikutnya
    angkot++;
}