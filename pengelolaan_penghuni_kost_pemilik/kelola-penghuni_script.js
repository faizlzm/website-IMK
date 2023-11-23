
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

const teamMembers = [
  {
      kamar: 1,
      name: 'Ahmad Faiz Ali Azmi',
      tanggal: '12 November 2023'
  },
  {
      kamar: 2,
      name: 'Salsa Zufar Radinka Akmal',
      tanggal: '12 November 2023'
  },
  {
    kamar: 3,
      name: 'Muhammad Yasin Hakim',
      tanggal: '12 November 2023'
  },

  {
    kamar: 4,
      name: 'Fauzan Ghaza Madani',
      tanggal: '12 November 2023'
  },
  {
    kamar: 5,
      name: 'Ananda Ravi Kuntadi',
      tanggal: '12 November 2023'
  },
  {
    kamar: 6,
      name: 'Qyan Rommy Mario',
      tanggal: '12 November 2023'
  },
  {
    kamar: 7,
      name: 'Azril Januar Athallah',
      tanggal: '12 November 2023'
  },
  {
    kamar: 8,
    name: 'Haikal Gibran Gunawan',
    tanggal: '12 November 2023'
  },
  {
    kamar: 9,
    name: 'Lucas Awan Cahya Buana',
    tanggal: '12 November 2023'
  },
  {
    kamar: 10,
    name: 'Jaya Winata',
    tanggal: '12 November 2023'
  },
  {
    kamar: 11,
    name: 'Abyan Rifqi Zainum Muttaqin',
    tanggal: '12 November 2023'
  },
];

let tableBody = document.querySelector('.daftar');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers.filter((teamMember, i) => (((start - 1) * itemsOnPage) < i + 1) && (i+1 <= start * itemsOnPage))
.map((teamMember, i) => {
  return `
  <div class="record">
        <div class="kamar">
              <h3>Kamar ${teamMember.kamar}</h3>
        </div>
        <div class="content">
            <div class="title-description">
              <div class="title">
                 Nama Penghuni: ${teamMember.name}
              </div>
              <div class="description">
                Penyewaan Hingga: ${teamMember.tanggal}
              </div>
            </div>
            <span href="#explore-more" class="edit-button" title="Edit">
              Edit
            </span>
          </div>
  </div>
`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
  const pageNumber = i + 1;
  
  console.log(pageNumber, start)

  linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');