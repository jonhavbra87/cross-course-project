# gamehubjs1

This is an updated version of an older CA delivery of Noroff FrontEnd Online Study! I have started from scratch, and added all the styling and content from my old CA delivery.

I learned how to use innerHTML and add the content to an url. Then i learned how to use the .append (method) later on. I stucked with the ".append - method" because of it seems like the more modern way and it seamed a bit faster.
I have included my first attemt to render the product and products pages her:

Products page:

const resultsContainer = document.querySelector(".results");

const host = "https://api.noroff.dev";
const endpoint = "/api/v1/gamehub/";
const apiUrl = host + endpoint;

export async function getProducts() {
try {
const response = await fetch(apiUrl);

    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";
    //function (games) -> is a logic name for the "results".
    results.forEach(function (games) {
        resultsContainer.innerHTML += `<a href="product.html?id=${games.id}" class="results">
                                        <img class="product" src="${games.image}" alt="${games.title}"</img>
                                        <h3>${games.title}</h3>
                                        <p>${games.price}</p>
                                    </a>`
    });
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

};

getProducts();

Product page:
// const detailsContainer = document.querySelector(".container");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// const urlDetails = "https://api.noroff.dev/api/v1/gamehub/" + id;

// export async function fetchGame() {
// const response = await fetch(urlDetails);
// const details = await response.json();

// createHtml(details);
// }

// fetchGame();

// function createHtml(details) {
// detailsContainer.innerHTML = ´
// <h1>${details.title}</h1>
// <img class="details-img" src="${details.image}" alt="${details.title}"</img>
// <p>${details.description}</p>
// <p>Price: ${details.price}</p>
// <time class="details-date">Released: ${details.released}</time>
// <p>${details.genre}</p>
// `;

// document.title =`${details.title}`;

// }
