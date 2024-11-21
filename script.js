// affichage produits

const hoverElement = document.querySelector(".prod");
const hoverElementTel = document.querySelector(".prodTel");
const targetDiv = document.querySelector(".produits");
const removeElement = document.querySelector(".corps");

hoverElement.addEventListener("mouseenter", () => {
  targetDiv.style.display = "flex";
});

hoverElementTel.addEventListener("mouseenter", () => {
  targetDiv.style.display = "flex";
});

removeElement.addEventListener("mouseenter", () => {
  targetDiv.style.display = "none";
});

// bouton menu version telephone

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const liensTel = document.querySelector(".liensTel");

  menuButton.addEventListener("click", () => {
    if (liensTel.style.display === "none" || liensTel.style.display === "") {
      liensTel.style.display = "flex";
    } else {
      liensTel.style.display = "none";
    }
  });
});