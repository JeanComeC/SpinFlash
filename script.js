document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#toggleButton");
  const liensTel = document.querySelector(".liensTel");
  const BtnProduitsTel = document.querySelector("#btn-produits-tel");
  const BtnProduitsOrdi = document.querySelector("#btn-produits-ordi");
  const ListeProduitsTel = document.querySelector("#liste-produits-tel");
  const ListeProduitsOrdi = document.querySelector("#liste-produits-ordi");
  const arrowTel = document.querySelector("#arrow-tel");
  const arrowOrdi = document.querySelector("#arrow-ordi");

  //loader
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
  loader.src = "img/fidget-spinner-svgrepo-com.svg";
  loader.style.position = "absolute";
  loader.style.width = "100px";
  loader.style.height = "100px";
  loader.style.animation = "rotation 0.2s linear infinite";

  
  document.getElementById("loaderBackground").appendChild(loader);
  
  setTimeout(() => {
    document.body.style.overflow = "auto";
    loaderBackground.style.display = "none";
    document.body.removeChild(loaderBackground);
  }, 2000);

  // bouton + animation menu version telephone

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

  // bouton + animation Produits Tel

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

  // bouton + animation Produits Ordi

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
});
