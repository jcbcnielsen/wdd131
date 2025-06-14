const deck = document.querySelector(".content");
const gMap = `<div class="card"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020.3251813198897!2d-77.45677973721651!3d38.30068450877813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6c2102e44e329%3A0xdb065ab56961c283!2sRiverfront%20Park%20Fredericksburg!5e0!3m2!1sen!2sus!4v1749872178342!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
const address = `<div class="card address">
                    <h3>701 Sophia St</h3>
                    <h3>Fredericksburg, VA 22401</h3>`;
const hours =      `<ul>
                        <li>Sun: Closed</li>
                        <li>Mon: 11:00am - 5:00pm</li>
                        <li>Tue:  1:00pm - 7:00pm</li>
                        <li>Wed: 11:00am - 5:00pm</li>
                        <li>Thu:  1:00pm - 5:00pm</li>
                        <li>Fri:  1:00pm - 5:00pm</li>
                        <li>Sat: 11:00am - 7:00pm</li>
                    </ul>
                </div>`;

const employees = [
    {
        emplName: "Chris Johnson",
        title: "President",
        email: "chris.johnson@fxbghema.com",
        photo: "images/profile-chris.webp"
    },
    {
        emplName: "Noelle Jacobson",
        title: "Vice President",
        email: "noelle.jacobson@fxbghema.com",
        photo: "images/profile-noelle.webp"
    },
    {
        emplName: "Mike Michaelson",
        title: "Secretary",
        email: "mike.michaelson@fxbghema.com",
        photo: "images/profile-mike.webp"
    },
    {
        emplName: "Larry Jameson",
        title: "Treasurer",
        email: "larry.jameson@fxbghema.com",
        photo: "images/profile-larry.webp"
    },
    {
        emplName: "Susan Johnson",
        title: "Quartermaster",
        email: "susan.johnson@fxbghema.com",
        photo: "images/profile-susan.webp"
    },
    {
        emplName: "Robert Jackson",
        title: "Safety Officer",
        email: "robert.jackson@fxbghema.com",
        photo: "images/profile-robert.webp"
    }
];

function emplTemplate(employee) {
    return `<div class="card profile">
                <img src="${employee.photo}" alt="${employee.emplName}" loading="lazy">
                <h3>${employee.emplName}</h3>
                <p>${employee.title}<p>
                <p>${employee.email}<p>
            </div>`;
}

deck.innerHTML = `<h2>Location and Hours</h2>${gMap}${address}${hours}
                    <h2>Our Leaders - Get in Touch!</h2>${employees.map(emplTemplate).join("")}`;