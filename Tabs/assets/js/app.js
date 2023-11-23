"use strict";

let links = document.querySelectorAll(".link-tab");
for(let link of links){
    link.addEventListener("click", linkTrigger)
}

function linkTrigger(event){

    let list = event.currentTarget.closest("ul");
    let activeLinks = list.querySelectorAll(".link-tab__active");
    for(let activeLink of activeLinks){
        activeLink.classList.remove("link-tab__active");
    }

    let links = list.querySelectorAll(".link-tab");
    for(let linkTab of links){
        let tabId = linkTab.getAttribute("href");
        let TabElement = document.querySelector(tabId);
        TabElement.classList.add("hidden");
    
    }

    let clickedLink = event.currentTarget;
    clickedLink.classList.add("link-tab__active");

    let contentId = clickedLink.getAttribute("href");
    let content = document.querySelector(contentId);
    content.classList.remove("hidden");
}




















