"use strict";

let oldScrollY = 0;
const menu = document.querySelector(".menu");

window.addEventListener("scroll", scrollListener);

function scrollListener(){
    if(oldScrollY > window.scrollY){
        menu.classList.remove("menu--hidden")
    }else{
        menu.classList.add("menu--hidden")
    }
    oldScrollY = window.scrollY;

}
















