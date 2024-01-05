
export function renderDetailedGame(gameData) {
    const mainElement = document.querySelector(".details");
    
    const gameElement = document.createElement("a");
    gameElement.href = "/product/?id=" + gameData.id;

    gameElement.dataset.id = gameData.id;

    const headline = document.createElement("h1");
    headline.classList.add("product");
    headline.textContent = gameData.name;

    const containerElement = document.createElement("div");


    const imgElement = document.createElement("img");
    imgElement.classList.add("cover");
    imgElement.src = `${gameData.images[0].src}`;
    imgElement.setAttribute("alt", `cover image of ${gameData.images[0].alt}`);


    let percentElement;
    if (gameData.on_sale === true) {
        const percentOff = Math.round(100 - (gameData.prices.sale_price / gameData.prices.regular_price) * 100);

        percentElement = document.createElement("p");
        percentElement.innerHTML = `<span class="onsale">${percentOff}<i class="fa-solid fa-percent"></i></span>`;

        containerElement.classList.add("cover-container");
        containerElement.appendChild(imgElement);
        containerElement.appendChild(percentElement);
    }else {
        percentElement = document.createElement("p");
        percentElement.innerHTML = `Original: <i class="fa-solid fa-dollar-sign"></i> ${gameData.prices.regular_price}`;
        containerElement.appendChild(imgElement);
        }

    
    
    // Define either the priceElement is onSale or not. Checks if on_sale is true or false.
    let priceElement;
    if (gameData.on_sale === true) {

    const salePrice = parseFloat(gameData.prices.sale_price) / 100;

    priceElement = document.createElement("p");
    priceElement.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> ${salePrice.toFixed(2)}`;
    } else {
    const regularPrice = parseFloat(gameData.prices.regular_price) / 100;

    priceElement = document.createElement("p");
    priceElement.innerHTML = `Original: <i class="fa-solid fa-dollar-sign"></i> ${regularPrice.toFixed(2)}`;
    }

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("details");
    descriptionElement.innerHTML = `<i class="fa-solid fa-comment-dots"></i>${gameData.description}`;

    const releasedElement = document.createElement("p");
    releasedElement.innerHTML = `<i class="fa-regular fa-calendar"></i> ${gameData.attributes[1].terms[0].name}`;

    const genreElement = document.createElement("p");
    genreElement.innerHTML = `<i class="fa-solid fa-gamepad"></i> ${gameData.categories[0].name}`;

    const ageRatingElement = document.createElement("p");
    ageRatingElement.innerHTML = ` <i class="fa-solid fa-circle-info"></i>PEGI: ${gameData.attributes[0].terms[0].name}`;

    const buttonElement = document.createElement("a");
    buttonElement.classList.add("buy-button");
    buttonElement.innerHTML = `BUY NOW`;
    buttonElement.href = "/checkout/?id=" + gameData.id;

    gameElement.append(headline, containerElement, priceElement, descriptionElement, releasedElement, genreElement, ageRatingElement, buttonElement);

    mainElement.append(gameElement);

    document.title = `GameHub | ${gameData.title}`;
}

export function renderDetailsOfGame(listOfGames) {
    const mainElement = document.querySelector(".details");
    mainElement.innerHTML = "";
renderDetailedGame(listOfGames);
console.log(listOfGames);
}