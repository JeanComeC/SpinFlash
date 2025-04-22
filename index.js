document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(2)";
    })
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    })
})