var preloader = document.getElementById('loading');
function myFunction(){
    preloader.style.display = 'none';
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    effect: "fade",
    centeredSlides: true,
    mousewheel: true,
    keyboard: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// scroll indicator//
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}