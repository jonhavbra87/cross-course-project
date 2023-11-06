export function renderGames(gameData) {
    const mainElement = document.querySelector(".results");

    const gameElement = document.createElement("a");
    gameElement.href = "/product/?id=" + gameData.id;

    const title = document.createElement("h3");
    title.textContent = gameData.title;

    const ImgElement = document.createElement("img");
    ImgElement.classList.add("cover");
    ImgElement.src = `${gameData.image}`;
    ImgElement.setAttribute("alt", `cover image of ${gameData.title}`);
   
    const priceElement = document.createElement("p");
    priceElement.textContent = `$ ${gameData.price}`;

    gameElement.append(title, ImgElement, priceElement);

    mainElement.append(gameElement);

    document.title = gameData.title;
}

export function renderGames2(detailsOfGame) {
    detailsOfGame.forEach(renderGames);
}