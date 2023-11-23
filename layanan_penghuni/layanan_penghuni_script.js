
const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  })
});

document.getElementById('jenis_layanan').addEventListener('change', function () {
  var selectedOption = this.value;
  var pilihanGalonJumlah = document.querySelector('.pilihan_galon_jumlah');
  var pilihanLaundry = document.querySelector('.pilihan_laundry');
    
  if (selectedOption === 'Pesanan Galon') {
      pilihanGalonJumlah.style.display = 'block';
      pilihanLaundry.style.display = 'none';
  } else if (selectedOption === 'Pesanan Laundry') {
      pilihanGalonJumlah.style.display = 'none';
      pilihanLaundry.style.display = 'block';
  } else {
      pilihanGalonJumlah.style.display = 'none';
      pilihanLaundry.style.display = 'none';
  }
});

document.getElementById('pesanButton').addEventListener('click', function () {
  var jenisLayanan = document.getElementById('jenis_layanan').value;

  if (jenisLayanan === 'Pesanan Galon') {
    // Tampilkan pop-up konfirmasi sesuai dengan pesanan galon
    var jenisGalon = document.querySelector('.jenis_galon').value;
    var jumlahGalon = document.querySelector('.jumlah_galon').value;

    if (jenisGalon == "" || jumlahGalon == "") {
      alert("Mohon lengkapi data pesanan galon.");
    } else {
      alert("Anda memesan galon " + jenisGalon + " sebanyak " + jumlahGalon);
      // Reset the selected value of jenis_layanan
      document.getElementById('jenis_galon').value = "";
      document.getElementById('jumlah_galon').value = "";
    }
  } else {
    alert("Pilih jenis layanan terlebih dahulu.");
  }
});

document.getElementById('pesanButtonLaundry').addEventListener('click', function () {
  var jenisLayanan = document.getElementById('jenis_layanan').value;

  if (jenisLayanan === 'Pesanan Laundry') {
    // Tampilkan pop-up konfirmasi sesuai dengan pesanan laundry
    var berapaHari = document.querySelector('.berapa_hari').value;
    var jenisLayananLaundry = document.querySelector('.jenis_layanan_laundry').value;

    if (berapaHari === "" || jenisLayananLaundry === "") {
      alert("Mohon lengkapi data pesanan laundry.");
    } else {
      alert("Anda memesan laundry untuk " + berapaHari + " hari dengan jenis layanan " + jenisLayananLaundry);
      // Reset the selected value of jenis_layanan
      document.getElementById('berapa_hari').value = "";
      document.getElementById('jenis_layanan_laundry').value = "";
    }
  } else {
    alert("Pilih jenis layanan terlebih dahulu.");
  }
});





