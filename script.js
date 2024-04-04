// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//-------------------------------------------------------------------//

let playOnce = true;

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  //nav event
  if (window.scrollY > 0) {
    navbar.style.height = "60px";
  } else {
    navbar.style.height = "90px";
  }
  //img event

  if (scrollValue > 0.45) {
    imgImprovise.style.transform = "translateX(0)";
    imgImprovise.style.opacity = 1;
  }
  //popup event
  if (scrollValue > 0.85 && playOnce) {
    popup.style.transform = "none";
    popup.style.opacity = 1;
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(400px)";
  popup.style.opacity = 0;
  //   setTimeout(() => {
  //     popup.style.display = "none";
  //   }, 1000);
});
