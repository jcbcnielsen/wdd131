const tempcell = document.querySelector("#temp");
const condcell = document.querySelector("#cond");
const speedcell = document.querySelector("#windvel");
const chillcell = document.querySelector("#windchill");

let temp = 10;
let cond = "Overcast";
let windvel = 5;

function calculateWindChill(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * (v ** 0.16)) + (0.3965 * t * (v ** 0.16));
}

tempcell.textContent = `${temp} °C`;
condcell.textContent = cond;
speedcell.textContent = `${windvel} km/h`;

if (temp <= 10 && windvel > 4.8) {
    chillcell.textContent = `${calculateWindChill(temp, windvel).toFixed(2)} °C`;
}
else {
    chillcell.textContent = `N/A`;
}