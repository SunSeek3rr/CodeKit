"use strict";
document.addEventListener("scroll", scrollListener);

function scrollListener(){
    let scrollX = window.scrollX;
    let backLayer = document.querySelector(".parallax__layer--back");
    let middleLayer = document.querySelector(".parallax__layer--middle");
    let frontLayer = document.querySelector(".parallax__layer--front");

    backLayer.style.backgroundPosition = (scrollX * 0.1)+"px";
    middleLayer.style.backgroundPosition = (scrollX * 0.3)+"px";
    frontLayer.style.backgroundPosition = (scrollX * 0.5) +"px";
}