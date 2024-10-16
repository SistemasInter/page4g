document.addEventListener("DOMContentLoaded", function () {
  $(".carousel").slick({
    dots: true,
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: "50px",
        },
      },
    ],
  });

  // Manejar el evento de desplazamiento
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    // El usuario está en la parte superior de la página
    if (pageYOffset <= 20) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      return;
    }

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
