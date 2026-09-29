/*
 * repeatPrompt - loop prompt yang berulang untuk mengecek ganjil/genap
 * - Menangani Cancel (mengakhiri sesi)
 * - Memvalidasi input agar berupa bilangan bulat
 * - Menawarkan konfirmasi untuk melanjutkan atau keluar
 */
(function repeatPrompt() {
    // Loop utama: terus meminta input sampai user membatalkan
    while (true) {
        // Minta input; null jika user menekan Cancel
        var input = prompt('Masukkan angka (tekan cancel atau batal untuk berhenti):');

        // Jika Cancel, keluar dari loop
        if (input === null) {
            alert('Selesai.');
            break;
        }

        // Hapus spasi dan konversi ke Number
        input = input.trim();
        var angka = Number(input);

        // Validasi: pastikan bukan string kosong, finite, dan integer
        if (input === '' || !Number.isFinite(angka) || !Number.isInteger(angka)) {
            // Tanyakan apakah ingin coba lagi atau keluar
            if (!confirm('Input bukan angka bulat. Coba lagi?')) {
                alert('Selesai.');
                break;
            }
            continue; // ulangi loop
        }

        // Tentukan genap/ganjil
        if (angka % 2 === 0) {
            alert(angka + ' adalah bilangan GENAP');
        } else {
            alert(angka + ' adalah bilangan GANJIL');
        }

        // Tanyakan apakah ingin melanjutkan
        if (!confirm('Coba lagi?')) {
            alert('Selesai.');
            break;
        }
    }
})();