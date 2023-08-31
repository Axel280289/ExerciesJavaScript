let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});

// Pour que la navbar soit caché lorque l'on scroll vers le bas et reviennne quand on scroll en haut
