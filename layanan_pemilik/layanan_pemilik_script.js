
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
      pesanan: 'Galon Aqua 1',
  },
  {
      kamar: 2,
      name: 'Salsa Zufar Radinka Akmal',
      pesanan: 'Galon Cleo 2'
  },
  {
    kamar: 3,
      name: 'Muhammad Yasin Hakim',
      pesanan: 'Laundry Cuci Setrika 3 Hari'
  },

  {
    kamar: 4,
      name: 'Fauzan Ghaza Madani',
      pesanan: 'Galon Aqua 2'
  },
  {
    kamar: 5,
      name: 'Ananda Ravi Kuntadi',
      pesanan: 'Laundry Cuci Kering Lipat 2 Hari'
  },
  {
    kamar: 6,
      name: 'Qyan Rommy Mario',
      pesanan: 'Galon Cleo 2'
  },
  {
    kamar: 7,
      name: 'Azril Januar Athallah',
      pesanan: 'Galon Aqua 2'
  },
  {
    kamar: 8,
    name: 'Haikal Gibran Gunawan',
    pesanan: 'Galon Aqua 1'
  },
  {
    kamar: 9,
    name: 'Lucas Awan Cahya Buana',
    pesanan: 'Laundry Cuci Setrika 1 Hari'
  },
  {
    kamar: 10,
    name: 'Jaya Winata',
    pesanan: 'Laundry Cuci Setrika 3 Hari'
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
        <div class="content">
            <div class="title-description">
              <div class="title">
                 Nama Pemesan: ${teamMember.name}
              </div>
              <div class="description">
                Kamar: ${teamMember.kamar}
              </div>
              <div class="description">
                Pesanan: ${teamMember.pesanan}
              </div>
            </div>
            <span href="#explore-more" class="detail-button" title="Detail">
              Detail Pesanan
            </span>
            <div class="edit-button" title="Edit">
              <input type="checkbox" id="editCheckbox${i}" />
            </div>          
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