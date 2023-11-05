import { getGames } from "../api/getProducts.js";
import { renderGames } from "../render/products.js";


export async function gamesPage() {
    const games = await getGames();
    renderGames(games);
}
