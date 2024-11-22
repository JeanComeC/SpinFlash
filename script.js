// affichage produits
// document.addEventListener("DOMContentLoaded", () => {
//   const hoverElement = document.querySelector(".prod");
//   const hoverElementTel = document.querySelector(".prodTel");
//   const targetDiv = document.querySelector(".produits");
//   const removeElement = document.querySelector(".corps");

//   hoverElement.addEventListener("click", () => {
//     targetDiv.style.display = "flex";
//   });

//   hoverElementTel.addEventListener("click", () => {
//     targetDiv.style.display = "flex";
//   });

//   removeElement.addEventListener("mouseenter", () => {
//     targetDiv.style.display = "none";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#toggleButton");
  const liensTel = document.querySelector(".liensTel");
  const ProduitButtons = document.querySelectorAll(".prod");
  const ListeProduits = document.querySelector(".produits");
  const ProduitActif = document.querySelector(".produits-actif");
  // bouton + animation menu version telephone

  menuButton.addEventListener("click", () => {
    if (liensTel.classList.contains("menu-actif")) {
      liensTel.classList.remove("menu-actif");
      liensTel.classList.add("menu-inactif");
      liensTel.style.height = "0";
      ListeProduits.style.height = "0";
      ListeProduits.classList.add("menu-inactif");
    } else {
      liensTel.classList.remove("menu-inactif");
      liensTel.style.height = liensTel.scrollHeight + "px";
      liensTel.classList.add("menu-actif");
    }
  });

  // bouton + animation produits toutes versions

  ProduitButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (ListeProduits.classList.contains("produits-actif")) {
        ListeProduits.classList.remove("produits-actif");
        if (window.innerWidth < 805) {
          let menuHeight = liensTel.scrollHeight - ListeProduits.scrollHeight;
          liensTel.style.height = menuHeight + "px";
        }
        ListeProduits.style.height = "0";
        ListeProduits.classList.add("menu-inactif");
      } else {
        ListeProduits.style.height = ListeProduits.scrollHeight + "px";
        if (window.innerWidth < 805) {
          liensTel.style.height =
            ListeProduits.scrollHeight + liensTel.scrollHeight + "px";
        }
        ListeProduits.classList.remove("menu-inactif");
        ListeProduits.classList.add("produits-actif");
      }
    });
  });
});
