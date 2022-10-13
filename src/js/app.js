function navSide() {
    const burger = document.querySelector("#burger");
    const menuNav = document.querySelector("#navside");
    const closeBtn = document.querySelector("#closeBtn");
    const closeNavWithBody = document.querySelector("body");

    burger.addEventListener("click", () => {
        menuNav.classList.add("nav-active");

        // body to left
        closeNavWithBody.classList.add("left");
    });

    closeBtn.addEventListener("click", () => {
        menuNav.classList.remove("nav-active");
        closeNavWithBody.classList.remove("left");
    });

    closeNavWithBody.addEventListener("mouseup", (e) => {
        if (e.target !== closeBtn && e.target !== menuNav) {
            menuNav.classList.remove("nav-active");
            closeNavWithBody.classList.remove("left");
        }
    });
}
navSide();

// Selected some house
function homeSelected() {
    const heartIcon = document.querySelectorAll(".heart_icon");

    heartIcon.forEach(item => {
        item.addEventListener("click", function () {
            item.classList.toggle("heart-active");
        });
    });
}
homeSelected();

// slider
new Swiper(".blog__items", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        940: {
            slidesPerView: 2
        }
    }
});