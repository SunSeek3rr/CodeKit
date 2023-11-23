"use strict";
let darkModeBtn = document.querySelector(".btn--darkmode");
darkModeBtn.addEventListener("click",darkmodecallback);
let getlitem = localStorage.getItem("theme");

if(getlitem == "dark" || getlitem == "light"){
    document.body.setAttribute("data-theme",getlitem);
}


/*if(getlitem == "dark"){
    document.body.setAttribute("data-theme","dark");
} else{
    document.body.setAttribute("data-theme","light");
}*/

//localStorage.getItem("theme") // rechercher dans le local storage
function darkmodecallback(){
    let currentMode = document.body.getAttribute("data-theme");
    let systemThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if((!currentMode && systemThemeDark)|| currentMode == "dark"){
        document.body.setAttribute("data-theme","light");
        localStorage.setItem("theme","light");
    }
    else{
        document.body.setAttribute("data-theme","dark");
        localStorage.setItem("theme","dark");

    }
}
