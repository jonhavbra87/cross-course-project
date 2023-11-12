import { getGames } from "../api/getProducts.js";
import { renderGames2 } from "../render/products.js";
import { displayError } from "../displayError.js"

const errorMessage = document.querySelector(".results");


export async function gamesPage() {
try {
    errorMessage.innerHTML = "";
    const games = await getGames();
    renderGames2(games);
} catch (error) {
    //This console log is for developers:
    console.log("Unable to fetch api", error);
    errorMessage.innerHTML += displayError("Unable to fetch API", error);
}
}