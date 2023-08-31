let playOnce = true;

window.addEventListener("scroll", () => {
  // navBar effect

  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  // image
  let scrollVallue =
    //   permet de calculer la valeur du scroll au %  window.innerHeight
    //   permet de compter la barre de scroll dans le calcul
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollVallue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  // pop up
  if (scrollVallue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
    // mettre une condition pour qu'une fois la popup fermé elle ne revienne plus
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
