// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//-------------------------------------------------------------------//

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "60px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY > 250) {
    imgImprovise.style.transform = "translateX(0)";
    imgImprovise.style.opacity = 1;
  }

  if (window.scrollY > 1620) {
    popup.style.transform = "translateX(0)";
    popup.style.opacity = 1;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(-200px)";
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
});
