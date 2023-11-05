// export function renderGame(gameData) {
//     const mainElement = document.querySelector(".results ")
    
//     const gameElement = document.createElement("a");
//     gameElement.href = "/product/?id=" + gameData.id;

//     const title = document.createElement("h3");
//     title.textContent = gameData.title;
//     console.log(title);

//     const img = document.createElement("img");
//     img.src = gameData.image;
//     img.alt = gameData.title;

      
//     gameElement.append(img);
//     gameElement.append(title);

//     mainElement.append(gameElement);

//     document.title = gameData.title;
// }

export function renderGame(gameData) {
    const mainElement = document.querySelector(".results");

    const gameElement = document.createElement("a");
    gameElement.href = "/product/?id=" + gameData.id;

    // const img = document.createElement("img");
    // img.src = gameData.image;
    // img.alt = gameData.title;
    
    const ImgElement = document.createElement("img");
    ImgElement.classList.add("cover");
    ImgElement.src = `${gameData.image}`;
    ImgElement.setAttribute("alt", `cover image of ${gameData.title}`);

    const title = document.createElement("h3");
    title.textContent = gameData.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: ${gameData.price}`;

    const releasedElement = document.createElement("p");
    releasedElement.textContent = `Released: ${gameData.released}`;
 
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Description: ${gameData.description}`;

    const ageRatingElement = document.createElement("p");
    ageRatingElement.textContent = `Age Rating: ${gameData.ageRating}`;

    const genreElement = document.createElement("p");
    genreElement.textContent = `Genre: ${gameData.genre}`;


    gameElement.append(ImgElement, title, priceElement, ageRatingElement, releasedElement, descriptionElement, genreElement);

    mainElement.append(gameElement);

    document.title = gameData.title;
}

export function renderGames(listOfGames) {
    listOfGames.forEach(renderGame);
}