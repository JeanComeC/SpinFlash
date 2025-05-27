// Sélectionne toutes les images et ajoute des événements pour zoomer au clic et réinitialiser au survol
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    img.style.transform = "scale(2)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// Lance l'animation après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {}, 2000); // (Inutile ici, mais présent dans le code)
  animation();
});

// Fonction d'animation pour écrire le texte d'un <h3> lettre par lettre
function animation() {
  const h3 = document.querySelectorAll(".content h3")[0];
  const words = h3.innerText;
  h3.innerText = "";
  let i = 0;

  // Fonction interne pour afficher chaque caractère avec un délai
  function type() {
    if (i < words.length) {
      h3.innerHTML += words[i] === " " ? "&nbsp;" : words[i];
      i++;
      setTimeout(type, 150);
    }
  }

  setTimeout(type, 2000); // Démarre l'animation après 2 secondes
  console.log(words); // Affiche le texte original dans la console
}
