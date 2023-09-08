function getColor() {
  // on met nos parametres dans une fonction
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = color; // on demande que le background de body sois egale a le random de nos 3 constante
  document.body.innerHTML = `<h2>${color}</h2>`; //on appele notre texte dans un H2
}
setInterval(getColor, 2000); // enfin on appel la fonction dans un set interval pour quelle sois joué toutes les 2 secondes dans ce cas

//-----------------ou-------------------

// setInterval(() => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   const color = `rgb(${r}, ${g}, ${b})`;

//   document.body.style.background = color;
//   document.body.innerHTML = `<h2>${color}</h2>`;
// }, 2000);
