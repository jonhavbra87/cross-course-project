import { getGame } from "./../api/getProducts.js";
import { renderDetailsOfGame } from "../render/product.js";
import { displayError } from "../displayError.js";

const errorMessage = document.querySelector(".details");
// errorMessage.innerHTML = "";

export async function gamePage() {
    try {const url = new URL (location.href);
    errorMessage.innerHTML = "";
    const id = url.searchParams.get("id");
    const game = await getGame(id);
    renderDetailsOfGame(game);
    } catch(error) {
        //This console log is for developers:
        console.log("Unable to fetch api", error);
        errorMessage.innerHTML += displayError("Unable to fetch API", error);
    }
}
