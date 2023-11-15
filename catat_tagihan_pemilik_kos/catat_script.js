
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
      src: '../img/user.jpg',
      name: 'James Alexander',
      tagihan: 'Rp. 5.000.000',
      status: 'lunas',
      tanggal: '12 November 2023'
  },
  {
      src: '../img/user.jpg',
      name: 'Lilia Taylor',
      tagihan: 'Rp. 5.000.000',
      status: 'lunas',
      tanggal: '12 November 2023'
  },
  {
      src: '../img/user.jpg',
      name: 'Drew Cano',
      tagihan: 'Rp. 5.000.000',
      status: 'belum',
      tanggal: '12 November 2023'
  },

  {
      src: '../img/user.jpg',
      name: 'Nate Conor',
      tagihan: 'Rp. 5.000.000',
      status: 'belum',
      tanggal: '12 November 2023'
  },
  {
      name: 'Melissa Brantley',
      src: '../img/user.jpg',
      tagihan: 'Rp. 5.000.000',
      status: 'lunas',
      tanggal: '12 November 2023'
  },
  {
      name: 'Anna Smith',
      src: '../img/user.jpg',
      tagihan: 'Rp. 5.000.000',
      status: 'lunas',
      tanggal: '12 November 2023'
  },
  {
      src: '../img/user.jpg',
      name: 'Natalia Alexandra',
      tagihan: 'Rp. 5.000.000',
      status: 'belum',
      tanggal: '12 November 2023'
  },
];

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => (((start - 1) * itemsOnPage) < i + 1) && (i+1 <= start * itemsOnPage))
.map(
(teamMember) => {
  return `<tr>
      <td class="team-member-profile">
          <img src="${teamMember.src}" alt="${teamMember.name}">
          <span class="profile-info">
              <span class="profile-info__name">
                  ${teamMember.name}
              </span>
          </span>
      </td>
      <td>
          <span class="status status--${teamMember.status}">
              ${teamMember.status}
          </span>
      </td>
      <td>${teamMember.tagihan}</td>
      <td>
          <span class="tanggal">
              ${teamMember.tanggal}
          </span>        
      </td>
  </tr>`;
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


