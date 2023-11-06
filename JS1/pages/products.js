import { getGames } from "../api/getProducts.js";
import { renderGames2 } from "../render/products.js";


export async function gamesPage() {
try {
    const games = await getGames();
    renderGames2(games);
} catch (error) {
    console.log("Unable to fetch api", error);
    
}
}
