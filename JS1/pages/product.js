import { getGame } from "./../api/getProducts.js";
import { renderDetailsOfGame } from "../render/product.js";

export async function gamePage() {
    try {const url = new URL (location.href);
    const id = url.searchParams.get("id");
    const game = await getGame(id);
    renderDetailsOfGame(game);
    } catch(error) {
        alert(error);
    }
}
