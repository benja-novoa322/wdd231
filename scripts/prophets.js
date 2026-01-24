
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // podria usarse el consolo.log pero el table funciona mejor para grandes cant. de data
    displayProphets(data.prophets);
}

getProphetData();

// card build stuff

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // card build goes here
        card = document.createElement("section");
        fullname = document.createElement("h2");
        date_of_birth = document.createElement("p");
        place_of_birth = document.createElement("p");
        portrait = document.createElement("img");
        // build the h2 content to show the prophet's full name
        fullname.textContent = `${prophet.name} ${prophet.lastname}`;
        date_of_birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        place_of_birth.textContent = `Place of Birth: ${prophet.birthplace}`;
        // build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // append the section (card) with the created elements
        card.appendChild(fullname);
        card.appendChild(date_of_birth);
        card.appendChild(place_of_birth);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}


// time stuff

const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;
