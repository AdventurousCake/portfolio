"use strict";

window.onload = function() {
    // popup
    // let popup = document.querySelector(".window");
    // let flash = document.querySelector(".open-window");
    // let close = document.querySelector(".close-window");

    // fix if null
    // flash.onclick = function () {
    //     // popup.style.display = "block";
    //     // popup.classList.toggle('active')
    //     let x = popup;
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //     } else {
    //         x.style.display = "block";
    //     }
    // }

    function menuOpen() {
        let hamburgerBtn = document.querySelector(".icon");
        let mobileMenu = document.querySelector(".hamburger")

        function show(e){
            if(mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none";
            } else {
                mobileMenu.style.display = "block";
            }
        }

        hamburgerBtn.addEventListener("click", show);
        // hamburgerBtn.addEventListener("mouseover", show);

    }

    menuOpen();
}

