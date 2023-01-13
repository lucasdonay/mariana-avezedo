const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
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
      slidesPerView: 2,
      spaceBetween: 28
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 33
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 38
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 0
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