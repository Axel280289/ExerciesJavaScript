const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
let countriesData = [];
let sortMethod = "maxToMin";

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));
  console.log(countriesData);
  countrieDisplay();
}

function countrieDisplay() {
  countriesContainer.innerHTML = countriesData
    .filter(
      // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
      (country) =>
        country.translations.fra.common
          .toLowerCase()
          .includes(inputSearch.value) //toLowerCase pour metttre en minuscule la recherche
    )

    .sort((a, b) => {
      // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })

    .slice(0, inputRange.value) // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
    .map(
      // 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
      (country) =>
        `
     <div class="card">
     <img src=${country.flags.svg} alt="drapeau ${
          country.translations.fra.common
        }" >
     <h2>${country.translations.fra.common}</h2>
     <h4>${country.capital}</h4>
     <p> Population : ${country.population.toLocaleString()} </p>
     </div>
    `
    )
    .join("");
}

window.addEventListener("load", fetchCountries); // joue la function quand la page se charge
inputSearch.addEventListener("input", countrieDisplay);
inputRange.addEventListener("input", () => {
  countrieDisplay();
  rangeValue.textContent = inputRange.value; // relie le input et la valeur
});

btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countrieDisplay();
  });
});
