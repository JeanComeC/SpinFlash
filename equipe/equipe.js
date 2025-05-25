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

let isEditMode = false;

function verif_modeedition(){
    //fenetre prompt:
    let resultat_user = window.prompt("Enter user :");
    let resultat_pwd;
    if(resultat_user=="admin"){
        resultat_pwd = window.prompt("Enter password :");
    }
    if (resultat_pwd == "admin_pwd"){
        console.log("Admin connecté");
        modeedition();
        return;
    }
    console.log("Admin non connecté");
}

function modeedition() {
  if (!isEditMode) {
    // Activer le mode édition
    isEditMode = true;
    document.querySelector(".boutton_modeedition").value =
      "Mode Edition (Activé)";

    // Afficher le bouton "Quitter le mode édition"
    document.getElementById("quitEditMode").style.display = "block";

    // Afficher un prompt pour ajouter une nouvelle biographie et image
    ajouterMembre();
  }
}

function ajouterMembre() {
  // Demander les informations via des prompts
  const nom = prompt("Entrez le nom du nouveau membre :", "");
  if (nom === null) return; // Annuler si l'utilisateur clique sur Annuler

  const poste = prompt("Entrez le poste du nouveau membre :", "");
  if (poste === null) return;

  const bioText = prompt("Entrez la biographie du nouveau membre :", "");
  if (bioText === null) return;

  const imageSrc = prompt(
    "Entrez le chemin de l'image (ex. ../img/nouvelle_image.png) :",
    ""
  );
  if (imageSrc === null) return;

  // Ajouter l'image dans image-row
  const imageRow = document.querySelector(".image-row");
  const newImageBlock = document.createElement("div");
  newImageBlock.className = "image-block";
  newImageBlock.innerHTML = `
      <div class="image-container">
          <img src="${imageSrc}" alt="photo ${nom}" class="photo" style="background-color: #3241c2" />
          <canvas class="grattage-canvas"></canvas>
      </div>
      <p class="name">${nom}</p>
      <p class="job">${poste}</p>
  `;
  imageRow.appendChild(newImageBlock);

  // Ajouter la biographie dans bio-row
  const bioRow = document.querySelector(".bio-row");
  const newBio = document.createElement("div");
  newBio.className = "bio";
  newBio.innerHTML = `
      <h2 style="color: #3241c2">Biographie de ${nom}</h2>
      <p>${bioText}</p>
  `;
  bioRow.appendChild(newBio);

  // Demander si l'utilisateur veut ajouter un autre membre
  if (isEditMode) {
    const continuer = confirm("Voulez-vous ajouter un autre membre ?");
    if (continuer) {
      ajouterMembre();
    }
  }
}

function quitterModeEdition() {
  isEditMode = false;
  document.querySelector(".boutton_modeedition").value = "Mode Edition";
  document.getElementById("quitEditMode").style.display = "none";
}

function main() {
    grattage();
}

// Exécuter le main quand la page est chargée
window.addEventListener("DOMContentLoaded", main);

// Éviter que le mode édition ne soit déclenché plusieurs fois inutilement
document.querySelector('.boutton_modeedition').addEventListener('click', verif_modeedition);
document.getElementById('quitEditMode').addEventListener('click', quitterModeEdition);


// getElementbyid
// .innerText