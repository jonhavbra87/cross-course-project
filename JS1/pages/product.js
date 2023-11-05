import { getGame } from "../api/getProducts.js";
import { renderGame } from "../render/products.js";


export async function gamePage() {
    try {const url = new URL (location.href);
    const id = url.searchParams.get("id");
    const game = await getGame(id);
    renderGame(game);
    } catch(error) {
        alert(error);
    }
}
