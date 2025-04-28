function main() {
  const canvases = document.querySelectorAll(".grattage-canvas");

  canvases.forEach((canvas) => {
    const img = canvas.previousElementSibling; // image juste avant dans le DOM
    const width = img.offsetWidth;
    const height = img.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    // Appliquer un effet "argenté" (grisé métallique)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#C0C0C0");
    gradient.addColorStop(1, "#A9A9A9");
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
    ctx.fill(); // Remplir un rond

    let isDrawing = false;

    // Ne gratter qu'avec click enfoncé
    canvas.parentElement.addEventListener("mousedown", () => {
      isDrawing = true;
    });
    canvas.parentElement.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    canvas.parentElement.addEventListener("mouseleave", () => {
      isDrawing = false;
    });

    canvas.parentElement.addEventListener("mousemove", (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    });
  });
}

// Exécuter main quand la page est chargée
window.addEventListener("DOMContentLoaded", main);
