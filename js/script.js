const arrow = document.querySelector(".header__login-arrow1");
arrow.addEventListener("click", function() {
    const arrowMenu = document.querySelector(".header__login-menu");
    arrow.classList.toggle("_open");
    arrowMenu.classList.toggle("_open");
});
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", function() {
    const menu = document.querySelector(".header__menu");
    menu.classList.toggle("_open");
    burger.classList.toggle("_open");
    document.body.classList.toggle("_lock");
});
new Swiper(".swiper-container",{
    slidesPerView: 5,
    loop: true,
    spaceBetween: 50,
    breakpoints: {
        1440: {
            slidesPerView: 5,
            spaceBetween: 100,
        },
        768: {
            slidesPerView: 5,
        },
        425: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        270: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl:".arrow_R",
        prevEl:".arrow_L",
    },
});