const expand_btn = document.querySelector('.expand-btn');

let activeIndex;

expand_btn.addEventListener('click', () => {
  document.body.classList.toggle('collapsed');
});

const current = window.location.href;

const allLinks = document.querySelectorAll('.sidebar-links a');

allLinks.forEach((elem) => {
  elem.addEventListener('click', function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});

const teamMembers = [
  {
    nomor: '1',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Oktober',
    tanggal: '12 November 2022',
  },
  {
    nomor: '2',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan September',
    tanggal: '12 November 2022',
  },
  {
    nomor: '3',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Agustus',
    tanggal: '12 November 2022',
  },

  {
    nomor: '4',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Juli',
    tanggal: '12 November 2022',
  },
  {
    nomor: '5',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Juni',
    tanggal: '12 November 2022',
  },
  {
    nomor: '6',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Mei',
    tanggal: '12 November 2022',
  },
  {
    nomor: '7',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan April',
    tanggal: '12 November 2022',
  },
  {
    nomor: '8',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Maret',
    tanggal: '12 November 2022',
  },
  {
    nomor: '9',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Februari',
    tanggal: '12 November 2022',
  },
  {
    nomor: '10',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Januari',
    tanggal: '12 November 2022',
  },
  {
    nomor: '11',
    nominal: 'Rp. 5.000.000',
    jenis: 'Pembayaran kost bulan Desember',
    tanggal: '12 November 2022',
  },
];

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 10;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = new URLSearchParams(window.location.search).get('page') || 1;

const mappedRecords = teamMembers
  .filter((teamMember, i) => (start - 1) * itemsOnPage < i + 1 && i + 1 <= start * itemsOnPage)
  .map((teamMember) => {
    return `<tr>
      <td>${teamMember.nomor}</td>
      <td>
          <span class="jenis">
              ${teamMember.tanggal}
          </span>
      </td>
      <td>${teamMember.jenis}</td>
      <td>
          <span class="tanggal">
              ${teamMember.nominal}
          </span>        
      </td>
  </tr>`;
  });

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
  const pageNumber = i + 1;

  console.log(pageNumber, start);

  linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');
