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

// start: Coversation
document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.preventDefault()
      if(this.parentElement.classList.contains('active')) {
          this.parentElement.classList.remove('active')
      } else {
          document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
              i.classList.remove('active')
          })
          this.parentElement.classList.add('active')
      }
  })
})

document.addEventListener('click', function(e) {
  if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
      document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
          i.classList.remove('active')
      })
  }
})

document.querySelectorAll('.conversation-form-input').forEach(function(item) {
  item.addEventListener('input', function() {
      this.rows = this.value.split('\n').length
  })
})

document.querySelectorAll('[data-conversation]').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.preventDefault()
      document.querySelectorAll('.conversation').forEach(function(i) {
          i.classList.remove('active')
      })
      document.querySelector(this.dataset.conversation).classList.add('active')
  })
})

document.querySelectorAll('.conversation-back').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.preventDefault()
      this.closest('.conversation').classList.remove('active')
      document.querySelector('.conversation-default').classList.add('active')
  })
})
// end: Coversation