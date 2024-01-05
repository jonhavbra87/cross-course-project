export function renderGames(gameData) {
    const mainElement = document.querySelector(".results");
    

    const gameElement = document.createElement("a");
    gameElement.href = "/product/?id=" + gameData.id;

    gameElement.dataset.id = gameData.id;

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

    const title = document.createElement("h3");
    title.textContent = gameData.name;
    title.style.marginTop = "15px";

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

    const buttonElement = document.createElement("a");
    buttonElement.classList.add("buy-button");
    buttonElement.innerHTML = `BUY NOW`;
    buttonElement.href = "/checkout/?id=" + gameData.id;


    gameElement.append(containerElement, title, priceElement, buttonElement);

    mainElement.append(gameElement);
}

export function renderGames2(detailsOfGame) {
    const mainElement = document.querySelector(".results");
    mainElement.innerHTML = "";
    detailsOfGame.forEach(renderGames);
}