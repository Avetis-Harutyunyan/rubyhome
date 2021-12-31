"use strict";

window.addEventListener("scroll", function() {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("navChange", window.scrollY > 50);

    const toUpBtn = document.querySelector(".toUpBtn");
    toUpBtn.classList.toggle("activeBtn", this.window.scrollY > 800);
});
