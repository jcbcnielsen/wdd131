const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const sbutton = document.querySelector("#sbutton");
const yesArmor = document.querySelector("#yes");
const noArmor = document.querySelector("#no");
const size = document.querySelector("#size");
const params = new URLSearchParams(window.location.search);

if (params.has("name" || params.has("email"))) {
    uname.value = params.get("name");
    email.value = params.get("email");
    sbutton.textContent = `Finish Signing Me Up!`;
}
else {
    sbutton.textContent = `Sign Up for the Club!`;
}

yesArmor.addEventListener("click", function() {
    size.removeAttribute("required");
    size.setAttribute("disabled", "");
});

noArmor.addEventListener("click", function() {
    size.removeAttribute("disabled");
    size.setAttribute("required", "");
});