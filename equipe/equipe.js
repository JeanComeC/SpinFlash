function grattage() {
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
    gradient.addColorStop(0, "#d4d4d4"); // Gris clair argent
    gradient.addColorStop(0.3, "#c0c0c0"); // Gris plus foncé
    gradient.addColorStop(0.6, "#a9a9a9"); // Gris plus foncé
    gradient.addColorStop(1, "#d4d4d4"); // Gris clair pour "reflets"
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
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    });
  });
}

function modeedition(){

    //fenetre prompt:
    let resultat_user = window.prompt("Enter user :");
    let resultat_pwd;
    if(resultat_user=="admin"){
        resultat_pwd = window.prompt("Enter password :");
    }
    if (resultat_pwd == "admin_pwd"){
        console.log("Admin connecté");
        //
        return;
    }
    console.log("Admin non connecté");
    
}

function main() {
    grattage();
}

// Exécuter le main quand la page est chargée
window.addEventListener("DOMContentLoaded", main);



// getElementbyid
// .innerText