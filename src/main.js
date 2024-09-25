function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");

  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("slide-in");
  navMenu.classList.toggle("slide-out");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    center: true, // This makes the card appear in the center
    nav: true, // Shows navigation arrows
    dots: true, // Shows pagination dots
    responsive: {
      0: {
        items: 1, // For mobile devices, show 1 item at a time
      },
      600: {
        items: 1, // For tablet, still show 1 item at a time
      },
      1000: {
        items: 1, // Desktop also shows 1 item at a time
      },
    },
  });
});
