//Validasi JS
// Dapatkan referensi ke form dan elemen input
const myForm = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Dapatkan referensi ke elemen span untuk pesan kesalahan
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Tambahkan event listener untuk submit form
myForm.addEventListener('submit', function(event) {
    // Mencegah pengiriman form default
    event.preventDefault();

    // Reset pesan kesalahan sebelumnya
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Lakukan validasi
    let isValid = true; // Flag untuk menentukan apakah form valid secara keseluruhan

    // Validasi Nama Pengguna
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Nama pengguna tidak boleh kosong.';
        isValid = false;
    } else if (usernameInput.value.trim().length < 3) {
        usernameError.textContent = 'Nama pengguna minimal 3 karakter.';
        isValid = false;
    }

    // Validasi Email
    // Pola regex sederhana untuk email. Untuk validasi email yang lebih ketat, gunakan regex yang lebih kompleks.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email tidak boleh kosong.';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Format email tidak valid.';
        isValid = false;
    }

    // Validasi Kata Sandi
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Kata sandi tidak boleh kosong.';
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Kata sandi minimal 6 karakter.';
        isValid = false;
    }

    // Jika semua validasi berhasil, Anda bisa mengirimkan form
    if (isValid) {
        alert('Form berhasil divalidasi dan akan dikirim!');
        // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
        // myForm.submit(); // Jika Anda ingin melanjutkan pengiriman form ke action
    }
});

// ... (Kode untuk mendapatkan referensi myForm, dll.)

const phoneNumberInput = document.getElementById('phoneNumber');
const phoneNumberError = document.getElementById('phoneNumberError');

//pengecekan nomor handphone
myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // ... (Reset pesan kesalahan lainnya)
    phoneNumberError.textContent = '';

    let isValid = true;

    // ... (Validasi username, email, password seperti sebelumnya)

    // Validasi Nomor Telepon
    const phoneNumberValue = phoneNumberInput.value.trim();
    if (phoneNumberValue === '') {
        phoneNumberError.textContent = 'Nomor telepon tidak boleh kosong.';
        isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumberValue)) { // Regex untuk tepat 10 digit angka
        phoneNumberError.textContent = 'Nomor telepon harus 10 digit angka.';
        isValid = false;
    }

    if (isValid) {
        alert('Form berhasil divalidasi dan akan dikirim!');
        // myForm.submit();
    }
});