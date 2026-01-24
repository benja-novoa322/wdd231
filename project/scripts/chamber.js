// store the selected elements that we are going to use

const navbutton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

// toggle the 'show' class of and on

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
})

// date stuff

const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

// card build

const url = 'https://raw.githubusercontent.com/benja-novoa322/wdd231/refs/heads/main/ward-member-info.json';
const card = document.querySelector('#cards');

async function displaymembers() {
    const response = await fetch(url);
    const data = await response.json();
    displaymembers(data.)
}