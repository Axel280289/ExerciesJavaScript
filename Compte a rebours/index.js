// Créer la logique de compte à rebours
let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60); // pour avoir le nombre de minutes
  const seconds = totalSeconds % 60; // pour avoir le reste de secondes qui ne rentre pas dans les minutes

  const sec = seconds < 10 ? "0" + seconds : seconds; //ternaire
  // si secondes est inferieur a 10 on ajoute un 0  (: = sinon seconds affiche les secondes normalement)

  countdownDisplay.textContent = `${minutes} : ${sec}`; // pour afficher les minutes et seconde sur le body
  if (totalSeconds > 0) {
    // si totalseconds est superieur a 0 faire -1 a chaque setinterval
    totalSeconds--;
  } else {
    // sinon afficher c'est terminé et arreter le compteur
    countdownDisplay.textContent = "c'est terminé !";
    clearInterval(interval); // permet de nettoyer l'interval
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    // si NaN (not a number) affiche un message d'erreur
    alert("Please enter a number");
  } else {
    totalSeconds = choice.value * 60; //transforme notre choix de minutes en secondes
    choice.value = "";
    clearInterval(interval); // permet de nettoyer l'interval
    setInterval(countDown, 1000);
  }
});
