const hoverElement = document.querySelector(".prod");
const targetDiv = document.querySelector(".produits");
const removeElement = document.querySelector(".corps");

hoverElement.addEventListener("mouseenter", () => {
  targetDiv.style.display = "flex";
});

removeElement.addEventListener("mouseenter", () => {
  targetDiv.style.display = "none";
});