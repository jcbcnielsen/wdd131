// Select DOM Elements
const currentyear = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

// Create a date object
const today = new Date();

// Output the retrieved times
currentyear.innerHTML = today.getFullYear();
modified.innerHTML = `Last modified: ${document.lastModified}`;