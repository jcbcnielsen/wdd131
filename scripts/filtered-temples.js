const ham = document.querySelector("#menu");
const navi = document.querySelector("nav");
const title = document.querySelector("h2");
const gal = document.querySelector("#gallery");
const ahome = document.querySelector("#home");
const aold = document.querySelector("#old");
const anew = document.querySelector("#new");
const alarge = document.querySelector("#large");
const asmall = document.querySelector("#small");

ham.addEventListener("click", function() {
    ham.classList.toggle("open");
    navi.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Richmond Virginia",
    location: "Glen Allen, Virginia",
    dedicated: "2023, May, 7",
    area: 39202,
    imageUrl:
    "images/richmond-temple.webp"
  },
  {
    templeName: "Philadelphia Pennsylvania",
    location: "Philadelphia, Pennsylvania",
    dedicated: "2016, September, 18",
    area: 61466,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x250/philadelphia-pennsylvania-temple-exterior-1775822-wallpaper.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-776440-wallpaper.jpg"
  },
];

function cardTemplate(temple) {
    return `<div class="card">
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            </div>`;
}

function getYear(temple) {
    return parseInt(temple.dedicated.slice(0, 4));
}

function isOld(temple) {
    if (getYear(temple) < 1900) {
        return true;
    }
    else {
        return false;
    }
}

function isNew(temple) {
    if (getYear(temple) > 2000) {
        return true;
    }
    else {
        return false;
    }
}

function isLarge(temple) {
    if (temple.area > 90000) {
        return true;
    }
    else {
        return false;
    }
}

function isSmall(temple) {
    if (temple.area < 10000) {
        return true;
    }
    else {
        return false;
    }
}

ahome.addEventListener("click", function() {
    gal.innerHTML = temples.map(cardTemplate).join("");
    title.textContent = "Home";
});

aold.addEventListener("click", function() {
    gal.innerHTML = temples.filter(isOld).map(cardTemplate).join("");
    title.textContent = "Old Temples";
});

anew.addEventListener("click", function() {
    gal.innerHTML = temples.filter(isNew).map(cardTemplate).join("");
    title.textContent = "New Temples";
});

alarge.addEventListener("click", function() {
    gal.innerHTML = temples.filter(isLarge).map(cardTemplate).join("");
    title.textContent = "Large Temples";
});

asmall.addEventListener("click", function() {
    gal.innerHTML = temples.filter(isSmall).map(cardTemplate).join("");
    title.textContent = "Small Temples";
})

gal.innerHTML = temples.map(cardTemplate).join("");