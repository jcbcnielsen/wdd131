const ham = document.querySelector("#menu");
const navi = document.querySelector("nav");

function menuToggle() {
    ham.classList.toggle("open");
    navi.classList.toggle("open");
}

ham.addEventListener("click", menuToggle);