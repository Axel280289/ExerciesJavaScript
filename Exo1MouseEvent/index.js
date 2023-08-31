window.addEventListener("mousemove", (e) => {
  // console.log(e.x);
  cursor.style.top = e.y + "px";
  cursor.style.left = e.x + "px";

  circle1.style.top = e.y + "px";
  circle1.style.left = e.x + "px";

  circle2.style.top = e.y + "px";
  circle2.style.left = e.x + "px";
});

// Le meme code en plus rapide

const mouses = document.querySelectorAll("mouse");
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.y + "px";
  });
});
