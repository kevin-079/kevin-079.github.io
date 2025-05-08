/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

// Event listener untuk DOMContentLoaded
window.addEventListener('DOMContentLoaded', event => {

    // Aktivasi Bootstrap scrollspy pada elemen navigasi utama
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse navbar responsif ketika item diklik
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Validasi Form
    const form = document.getElementById("frmDaftar");
    form.addEventListener("submit", function(event) {
        if (!validasi()) {
            event.preventDefault();  // Mencegah form untuk dikirim jika validasi gagal
        }
    });
});

// Fungsi Validasi
function validasi() {
    var nama = document.getElementById("nama").value;
    var gender = document.getElementById("gender").value;
    var jalan = document.getElementById("jalan").value;
    var kelurahan = document.getElementById("kelurahan").value;
    var kecamatan = document.getElementById("kecamatan").value;
    var kota = document.getElementById("kota").value;
    var nohp = document.getElementById("nohp").value;
    var periksa = document.getElementById("periksa").value;

    // Validasi Nama
    if (nama.length == 0) {
        swal("Pesan!", "Nama harus diisi", "error");
        document.getElementById("nama").focus();
        return false;
    }

    // Validasi Jenis Kelamin
    if (gender == "") {
        swal("Pesan!", "Jenis Kelamin harus dipilih", "error");
        document.getElementById("gender").focus();
        return false;
    }

    // Validasi Alamat
    if (jalan.length == 0 || kelurahan.length == 0 || kecamatan.length == 0 || kota.length == 0) {
        swal("Pesan!", "Alamat harus lengkap", "error");
        document.getElementById("jalan").focus();
        return false;
    }

    // Validasi No. HP
    var phonePattern = /^[0-9]{10,13}$/;
    if (nohp.length == 0 || !phonePattern.test(nohp)) {
        swal("Pesan!", "No. HP harus valid (10-13 digit)", "error");
        document.getElementById("nohp").focus();
        return false;
    }

    // Validasi Jenis Pemeriksaan
    if (periksa == "") {
        swal("Pesan!", "Jenis pemeriksaan harus dipilih", "error");
        document.getElementById("periksa").focus();
        return false;
    }

    return true;  // Jika semua validasi berhasil
}

