document.addEventListener("DOMContentLoaded", () => {
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
  //               loader
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
  if (document.location.href.includes("index.html")) {
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
  //   bouton + animation menu version telephone
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
  // bouton + animation Produits Tel
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
  // bouton + animation Produits Ordi
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
  // Horloge Et Chronometre
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
  //        Copier / Plagiat
  //--------------------------------------

  document.addEventListener("copy", (e) => {
    let clipboardData = e.clipboardData || window.clipboardData;

    if (clipboardData) {
      console.log("Copie détectée !");
    }
  });
});

// ----------------------------------------------------
//
//                      FONCTIONS
//
// ----------------------------------------------------

function updateClockAndTimer(horloge) {
  // Horloge

  let datetime = new Date();

  horloge.innerHTML = datetime.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}