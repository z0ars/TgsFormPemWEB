document.getElementById("SUBMIT").addEventListener("click", function() {
    let nik = document.getElementById("NIK").value;
    let kk = document.getElementById("KK").value;
    let verPassword = document.getElementById("VERPASSWORD").value;
    let password = document.getElementById("PASSWORD").value;
    let errorMsg = "";

    // Validasi NIK dan KK harus berupa angka
    if (isNaN(nik) || nik === "") {
        errorMsg += "NIK harus berupa angka. ";
    }
    if (isNaN(kk) || kk === "") {
        errorMsg += "Nomor KK harus berupa angka. ";
    }

    // Validasi password dan verifikasi password sama
    if (password !== verPassword) {
        errorMsg += "Password dan verifikasi password tidak cocok. ";
    }

    // Tampilkan pesan error jika ada
    if (errorMsg) {
        alert(errorMsg);
    } else {
        // Jika semua validasi terpenuhi, pindah ke halaman homepage.html
        window.location.href = "homepage.html";
    }
});
