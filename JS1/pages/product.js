const container = document.querySelector(".container");

const urlDetails = "https://api.noroff.dev/api/v1/gamehub/ded6041a-622f-4fb4-81e4-96fcfdad4dff";

console.log(urlDetails);

async function fetchGame() {
    const response = await fetch(urlDetails);
    const games = await response.json();

    console.log(games);

    container.innerHtml = `<h1>${games.title}</h1>
                            <img class="product" src="${games.image}" alt="${games.title}"</img>
                            <h3>${games.title}</h3>
                            <p>${games.description}</p>`;
    console.log(container);
}

fetchGame();

// function createHtml(details) {
//     detailContainer.innerHTML = `<h1>${details.title}</h1>
//                                 <div class="details-image" 
//                                     style="background-image: url('${details.image}')"></div>
//                                 <div class="details-description">${details.description}</div>`;
// }