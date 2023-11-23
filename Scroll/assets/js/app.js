"use strict";
/*
var progressBar = document.querySelector(".barre-scroll-progress");

// Récupérer la hauteur totale de la page
var totalHeight = document.body.scrollHeight - window.innerHeight;

// Mettre à jour la barre de progression lorsque la page est défilée
window.addEventListener("scroll", (e) => {
    // Calculer la progression en pourcentage
    var progress = (window.scrollY / totalHeight) * 100;

    // Mettre à jour la largeur de la barre de progression
    progressBar.style.width = progress + "%";
});*/

var progressBar = document.querySelector(".scrollbar__progress");

if(progressBar){
    window.addEventListener("scroll", scrollListener);
}


function scrollListener(event){
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let currentScroll = window.scrollY;
    let readPercentage = (currentScroll / maxScroll) * 100;
    progressBar.style.width = readPercentage + "%";
}





















