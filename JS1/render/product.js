
export function renderDetailedGame(gameData) {
    const mainElement = document.querySelector(".details");

    const gameElement = document.createElement("a");
    gameElement.href = "/product/?id=" + gameData.id;

    const ImgElement = document.createElement("img");
    ImgElement.classList.add("cover");
    ImgElement.src = `${gameData.image}`;
    ImgElement.setAttribute("alt", `cover image of ${gameData.title}`);

    const title = document.createElement("h3");
    title.textContent = gameData.title;
    
    // Define either the priceElement. Checks if onSale is true or false.
    let priceElement;
    if (gameData.onSale === true) {
    priceElement = document.createElement("p");
    priceElement.textContent = `Special price: $ ${gameData.discountedPrice}`;
    } else {
    priceElement = document.createElement("p");
    priceElement.textContent = `Price:  $ ${gameData.price}`;
    }

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Description: ${gameData.description}`;

    const releasedElement = document.createElement("p");
    releasedElement.textContent = `Released: ${gameData.released}`;

    const genreElement = document.createElement("p");
    genreElement.textContent = `Genre: ${gameData.genre}`;

    const ageRatingElement = document.createElement("p");
    ageRatingElement.textContent = `PEGI: ${gameData.ageRating}`;

    gameElement.append(ImgElement, title, priceElement, descriptionElement, releasedElement, genreElement, ageRatingElement);

    mainElement.append(gameElement);

    document.title = `GameHub | ${gameData.title}`;
}

export function renderDetailsOfGame(listOfGames) {
    const mainElement = document.querySelector(".details");
    mainElement.innerHTML = "";
renderDetailedGame(listOfGames);
}