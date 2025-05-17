const ham = document.querySelector("#menu");
const navi = document.querySelector("nav");

ham.addEventListener("click", function() {
    ham.classList.toggle("open");
    navi.classList.toggle("open");
});