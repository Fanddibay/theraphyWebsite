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
        items: 2, // Desktop also shows 1 item at a time
      },
    },
  });
});

const stepper = new HSStepper(document.querySelector("#stepper"));
let errorState = 1;

stepper.on("beforeNext", (index) => {
  if (index === 2) {
    stepper.setProcessedNavItem(index);

    setTimeout(() => {
      stepper.unsetProcessedNavItem(index);
      stepper.enableButtons();

      if (errorState) {
        stepper.goToNext();
      } else {
        stepper.setErrorNavItem(index);
      }

      errorState = !errorState;
    }, 2000);
  }
});

document
  .getElementById("credit-card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Payment submitted!");
  });
