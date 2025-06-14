const signed = document.querySelector("#signed");

let isSignedUp = JSON.parse(localStorage.getItem("isSignedUp"));

if (isSignedUp != true) {
    if (window.location.search != "") {
        isSignedUp = true;
        localStorage.setItem("isSignedUp", JSON.stringify(isSignedUp));
        signed.textContent = `Sign up successful!`;
    }
    else {
        signed.textContent = `Error: sign up information not received.`;
    }
}
else {
    signed.textContent = `You are already signed up!`;
}