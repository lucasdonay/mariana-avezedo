const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: 'on',
  breakpoints: {
    297: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    991: {
      slidesPerView: 2.2,
      spaceBetween: 15
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 33
    }
  }
});

AOS.init();

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}