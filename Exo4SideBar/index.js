const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  //  toggle si la classe n'est pas mise il la met, sinon il l'enleve
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
