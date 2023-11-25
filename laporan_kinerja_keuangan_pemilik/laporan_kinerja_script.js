
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

// Halaman yang ditampilkan saat salah satu dropbox ditekan

function showDiv() {
  var dropdown = document.getElementById("jenis_laporan");
  var selectedValue = dropdown.options[dropdown.selectedIndex].value;
  var divToShow = document.getElementById("laporan-pilihan");

  // Cek nilai yang dipilih
  if (selectedValue === "Laporan_1") {
    // Tampilkan div dan sesuaikan kontennya
    divToShow.style.display = "block";
    divToShow.innerHTML = '<div class="chart-container">' +
    '<div class="bar" style="height: 80px;">80</div>' +
    '<div class="bar" style="height: 120px;">120</div>' +
    '<div class="bar" style="height: 50px;">50</div>' +
    '<div class="bar" style="height: 90px;">90</div>' +
    '</div>';
  } else if (selectedValue === "Laporan_2") {
    // Tampilkan div dan sesuaikan kontennya
    divToShow.style.display = "block";
    divToShow.innerHTML = "Konten untuk Pesanan Laundry";
  } else {
    // Sembunyikan div jika tidak ada yang dipilih
    divToShow.style.display = "none";
  }
}
