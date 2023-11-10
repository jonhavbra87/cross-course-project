import { getGames } from "../api/getProducts.js";
import { renderGames2 } from "../render/products.js";

const loader = document.querySelector(".loader");


export async function renderNews(){
    loader.innerHTML = "";
    const games = await getGames();
     
   
        let newGames = [];

    for (let i = 0; i < games.length; i++) {
        if (games[i].released >= 2007) {
          newGames.push(games[i]);
          }
      }

      newGames.pop();
      newGames.pop();
      renderGames2(newGames);
     
      return newGames;

}
