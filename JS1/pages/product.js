const detailsContainer = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const urlDetails = "https://api.noroff.dev/api/v1/gamehub/" + id;

async function fetchGame() {
    const response = await fetch(urlDetails);
    const details = await response.json();

    createHtml(details);
}

fetchGame();

function createHtml(details) {
    detailsContainer.innerHTML = `
                        <h1>${details.title}</h1>
                        <img class="details-img" src="${details.image}" alt="${details.title}"</img>
                        <p>${details.description}</p>
                        <p>Price: ${details.price}</p>
                        <time class="details-date">Released: ${details.released}</time>
                        <p>${details.genre}</p>
                        `;

document.title =`${details.title}`

}

//HUSK! ha med tittel på siden