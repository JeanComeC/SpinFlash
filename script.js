// affichage produits
document.addEventListener("DOMContentLoaded", () => {
  const hoverElement = document.querySelector(".prod");
  const hoverElementTel = document.querySelector(".prodTel");
  const targetDiv = document.querySelector(".produits");
  const removeElement = document.querySelector(".corps");

  hoverElement.addEventListener("click", () => {
    targetDiv.style.display = "flex";
  });

  hoverElementTel.addEventListener("click", () => {
    targetDiv.style.display = "flex";
  });

  removeElement.addEventListener("mouseenter", () => {
    targetDiv.style.display = "none";
  });
});

// bouton menu version telephone

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#toggleButton");
  const liensTel = document.querySelector(".liensTel");
  const targetDiv = document.querySelector(".produits");

  menuButton.addEventListener("click", () => {
    if (liensTel.classList.contains("menu-actif")) {
      liensTel.classList.remove("menu-actif");
      liensTel.classList.add("menu-inactif");
    } else {
     liensTel.classList.remove("menu-inactif");
     liensTel.classList.add("menu-actif");
    }
  });
});