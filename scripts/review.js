const success = document.querySelector("#success");
const count = document.querySelector("#revcounter");

let revcount = JSON.parse(localStorage.getItem("reviewcount")) || 0;

if (window.location.search != "") {
    revcount++;
    localStorage.setItem("reviewcount", JSON.stringify(revcount));
    success.textContent = "Your review has been submitted!";
}
else {
    success.textContent = "Error: Review not submitted.";
}

count.textContent = `Reviews you submitted: ${revcount}`;