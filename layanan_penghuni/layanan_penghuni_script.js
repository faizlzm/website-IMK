
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
  
  if (selectedOption === 'Pesanan Galon') {
      pilihanGalonJumlah.style.display = 'block';
  } else if (selectedOption === 'Pesanan Laundry') {
      pilihanGalonJumlah.style.display = 'none';
  } else {
      pilihanGalonJumlah.style.display = 'none';
  }
});

