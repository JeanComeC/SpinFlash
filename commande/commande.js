function validerFormulaire() {
  window.location.href = "../index.html"; // Redirection vers la page d'accueil
}

function annulerFormulaire() {
  document.getElementById("form_de_commande").reset(); // Réinitialise le formulaire
}

function lancerJeu() {
  // Appelle la fonction petitjeu()
  let resultatJeu = petitjeu();

  if (resultatJeu==true) {
    // Si victoire, simuler l'envoi (retour à l'accueil)
    validerFormulaire();
  } else {
    // Si défaite, réinitialiser le formulaire
    annulerFormulaire();
  }
}

function petitjeu(){//function qui return un booléen en fonction de la victoire ou pas
  let nombreAleatoire = Math.floor(Math.random() * 101); //floor => pour arrondir et random => pour générer un nombre aléatoire
  console.log("Nombre aléatoire : %d", nombreAleatoire);
  window.alert(
    "Attends ! tu as cru que tu pouvais nous commander un produit sans payer ?"
  );
  window.alert(
    "Pour la peine, voici un petit jeu : Devine le nombre auquel je pense (il est compris entre 0 et 100). Tu n'as que 5 essais. Bonne chance !"
  );
  //
  let nbEssais = 1;
  let reponse = window.prompt(
    `Essai n°${nbEssais} : (Tu n'a plus que ${6 - nbEssais} essais).`
  );
  for (let i = 0; i < 5; i++) {
    //je boucle que 4 fois car j'ai déjà fait 1 tour avant le for.
    if (reponse < nombreAleatoire) {
      window.alert(`Le nombre est plus grand.`);
      if(i==4){break};//je rajoute une mini condition d'arrêt pour que le programme check une derniere fois si le nombre est bon.
    }
    if (reponse > nombreAleatoire) {
      window.alert(`Le nombre est plus petit.`);
      if(i==4){break};//idem que ligne 40
    }
    if (reponse == nombreAleatoire) {
        window.alert("Bravo ! Vous avez gagné !");
        return true;
    }
    nbEssais++;
    reponse = window.prompt(
      `Essai n°${nbEssais} : (Tu n'a plus que ${6 - nbEssais} essais).`
    );
  }
  window.alert("Dommage ! Vous n'avez plus d'essais, vous avez donc perdu !");
  window.alert(`Le nombre était : ${nombreAleatoire} .`);
  return false;
}