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
    if (liensTel.style.height === "0" || liensTel.style.display === "") {
      liensTel.style.height = liensTel.scrollHeight + "px";
      liensTel.classList.add("expanded");
    } else {
      liensTel.style.height = "0";
      liensTel.classList.remove("expanded");
    }
  });
});