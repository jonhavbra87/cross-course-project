
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

    const priceElement = document.createElement("p");
    priceElement.textContent = `$ ${gameData.price}`;

    const genreElement = document.createElement("p");
    genreElement.textContent = `Genre: ${gameData.genre}`;


    gameElement.append(ImgElement, title, priceElement, genreElement);

    mainElement.append(gameElement);

    document.title = gameData.title;
}

export function renderDetailsOfGame(listOfGames) {

renderDetailedGame(listOfGames);
}