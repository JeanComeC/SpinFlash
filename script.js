// ----------------------------------------------------
//
//                      FONCTIONS
//
// ----------------------------------------------------

// Met à jour l'horloge affichée
function updateClockAndTimer(horloge) {
  // Horloge
  let datetime = new Date();
  horloge.innerHTML = datetime.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// Fonction pour simuler un appel téléphonique avec sonnerie
function sonnerie_tel() {
  console.log("c bon");
  let fprompt = window.prompt(
    "Si vous voulez appeler ce numéro : +33 (0)2 30 13 05 60, entrez le de nouveau dans le champ ci-dessous puis validez"
  );
  if (
    fprompt == "+33 (0)2 30 13 05 60" ||
    fprompt == "0230130560" ||
    fprompt == "+33 2 30 13 05 60"
  ) {
    console.log("Vous appelez ce numéro : +33 (0)2 30 13 05 60");
    // Joue la sonnerie
    const ringtone = document.getElementById("ringtone");
    ringtone.play();

    // Arrête la sonnerie après 5 secondes
    setTimeout(() => {
      ringtone.pause();
      ringtone.currentTime = 0;
    }, 13500); //j'ai mis plus de 5 secondes car je trouve la musique vraiment pas mal.
  }
}

// ----------------------------------------------------
//           Script principal du site SpinFlash
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Déclarations des éléments du DOM
  // -------------------------------
  const menuButton = document.querySelector("#toggleButton");
  const liensTel = document.querySelector(".liensTel");
  const BtnProduitsTel = document.querySelector("#btn-produits-tel");
  const BtnProduitsOrdi = document.querySelector("#btn-produits-ordi");
  const ListeProduitsTel = document.querySelector("#liste-produits-tel");
  const ListeProduitsOrdi = document.querySelector("#liste-produits-ordi");
  const arrowTel = document.querySelector("#arrow-tel");
  const arrowOrdi = document.querySelector("#arrow-ordi");
  const equipe = document.querySelectorAll("a.equipe");

  //--------------------------------------
  // Loader d'attente au chargement de la page
  //--------------------------------------
  const loaderBackground = document.createElement("div");
  loaderBackground.style.display = "flex";
  loaderBackground.style.justifyContent = "center";
  loaderBackground.style.alignItems = "center";
  loaderBackground.id = "loaderBackground";
  loaderBackground.style.height = "100vh";
  loaderBackground.style.width = "100vw";
  loaderBackground.style.backgroundColor = "white";
  document.body.style.overflow = "hidden";
  document.body.prepend(loaderBackground);
  const loader = document.createElement("img");
  if (
    document.location.href.includes("index.html") ||
    document.location.href.includes(null)
  ) {
    loader.src = "img/1017000-200.png";
  } else {
    loader.src = "../img/1017000-200.png";
  }
  loader.style.position = "absolute";
  loader.style.width = "100px";
  loader.style.height = "100px";
  loader.style.animation = "rotation 0.5s linear infinite";

  document.getElementById("loaderBackground").appendChild(loader);

  setTimeout(() => {
    document.body.style.overflow = "auto";
    loaderBackground.style.display = "none";
    document.body.removeChild(loaderBackground);
  }, 2000);

  //--------------------------------------
  // Gestion du menu version téléphone (ouverture/fermeture)
  //--------------------------------------
  menuButton.addEventListener("click", () => {
    if (liensTel.classList.contains("menu-actif")) {
      liensTel.style.height = "0";
      liensTel.classList.remove("menu-actif");
      liensTel.classList.add("menu-inactif");
      if (ListeProduitsTel.style.height != "0") {
        ListeProduitsTel.style.height = "0";
        ListeProduitsTel.classList.remove("produits-actif");
        ListeProduitsTel.classList.add("menu-inactif");
      }
    } else {
      liensTel.style.height = liensTel.scrollHeight + "px";
      liensTel.classList.remove("menu-inactif");
      liensTel.classList.add("menu-actif");
    }
  });

  //--------------------------------------
  // Animation du sous-menu "Produits" sur mobile
  //--------------------------------------
  BtnProduitsTel.addEventListener("click", () => {
    if (ListeProduitsTel.classList.contains("produits-actif")) {
      ListeProduitsTel.style.height = "0";
      liensTel.style.height =
        liensTel.scrollHeight - ListeProduitsTel.scrollHeight + "px";
      ListeProduitsTel.classList.remove("produits-actif");
      ListeProduitsTel.classList.add("menu-inactif");
      arrowTel.style.transform = "rotate(0deg)";
    } else {
      ListeProduitsTel.style.height = ListeProduitsTel.scrollHeight + "px";
      liensTel.style.height =
        liensTel.scrollHeight + ListeProduitsTel.scrollHeight + "px";
      ListeProduitsTel.classList.remove("menu-inactif");
      ListeProduitsTel.classList.add("produits-actif");
      arrowTel.style.transform = "rotate(180deg)";
    }
  });

  //--------------------------------------
  // Animation du sous-menu "Produits" sur ordinateur
  //--------------------------------------
  BtnProduitsOrdi.addEventListener("click", () => {
    if (ListeProduitsOrdi.classList.contains("produits-actif")) {
      ListeProduitsOrdi.style.height = "0";
      ListeProduitsOrdi.classList.remove("produits-actif");
      ListeProduitsOrdi.classList.add("menu-inactif");
      arrowOrdi.style.transform = "rotate(0deg)";
    } else {
      ListeProduitsOrdi.style.height = ListeProduitsOrdi.scrollHeight + "px";
      ListeProduitsOrdi.classList.remove("menu-inactif");
      ListeProduitsOrdi.classList.add("produits-actif");
      arrowOrdi.style.transform = "rotate(180deg)";
    }
  });

  //--------------------------------------
  // Confirmation avant de quitter la page via les liens "equipe"
  //--------------------------------------
  equipe.forEach((e) => {
    e.addEventListener("click", (e) => {
      if (window.confirm("Êtes-vous sûr de vouloir quitter cette page ?")) {
        window.location;
      } else {
        e.preventDefault();
      }
    });
  });

  //--------------------------------------
  // Horloge en temps réel et chronomètre
  //--------------------------------------
  const horloge = document.getElementById("heure");
  const heure = document.getElementById("chrono-heures");
  const minute = document.getElementById("chrono-minutes");
  const seconde = document.getElementById("chrono-secondes");

  let heure_temp = "0";
  let minute_temp = "0";
  let seconde_temp = "0";

  setInterval(function () {
    updateClockAndTimer(
      horloge,
      heure,
      minute,
      seconde,
      heure_temp,
      minute_temp,
      seconde_temp
    );
  }, 1000);

  setInterval(function () {
    seconde_temp = parseInt(seconde_temp) + 1;
    seconde_temp = seconde_temp.toString();
    if (seconde_temp >= 60) {
      seconde_temp = "0";
      minute_temp = parseInt(minute_temp) + 1;
      minute_temp = minute_temp.toString();
    }
    if (minute_temp >= 60) {
      minute_temp = "0";
      heure_temp = parseInt(heure_temp) + 1;
      heure_temp = heure_temp.toString();
    }

    heure.innerHTML = heure_temp.padStart(2, "0");
    minute.innerHTML = minute_temp.padStart(2, "0");
    seconde.innerHTML = seconde_temp.padStart(2, "0");
  }, 1000);

  //--------------------------------------
  // Message d'avertissement lors d'une tentative de copie (plagiat)
  //--------------------------------------
  document.addEventListener("copy", (e) => {
    let clipboardData = e.clipboardData || window.clipboardData;

    if (clipboardData) {
      console.log(
        "Le plagiat consiste à s’approprier le travail ou les idées d’autrui sans les citer. Il est interdit dans les contextes scolaires, universitaires et professionnels. Toute source utilisée doit être clairement mentionnée, qu’il s’agisse d’un texte, d’une image ou d’une idée. Le respect de ces règles garantit l’intégrité intellectuelle de chacun. Le non-respect peut entraîner des sanctions allant de l’avertissement à l’exclusion."
      );
    }
  });
});
