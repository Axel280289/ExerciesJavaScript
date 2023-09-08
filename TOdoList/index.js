const form = document.querySelector("form");

//---- stocker dans le local storage----

function storeList() {
  window.localStorage.todoList = list.innerHTML; // stock dans la console locale storage
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList; // recupere dans la console locale storage
  } else {
    list.innerHTML = `<li> Cliquez sur un todo pour le supprimer</li>`;
  }
}
window.addEventListener("load", getTodos); // pour jouer la function au chargement de la page

// add element
form.addEventListener("submit", (e) => {
  // ajouter l'evenement d'envois de formulaire
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  // ("ajouter une liste en validant ce que l'on tape");
  item.value = "";
  storeList(); // pour jouer la function qui stock dans le local storage
});

// remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    // si l'element est en checked et que j'appuye dessus le supprime
    e.target.remove();
  } else {
    e.target.classList.add("checked");
    //  sinon ajout d'une classe qui ajoute un before
  }
  storeList(); // pour jouer la function qui stock dans le local storage
});
