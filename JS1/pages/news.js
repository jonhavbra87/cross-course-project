import { getGames } from "../api/getProducts.js";
import { renderGames2 } from "../render/products.js";

const newsContainer = document.querySelector(".results");


export async function renderNews(){
    const games = await getGames();
     
   
        let newGames = [];

    for (let i = 0; i < games.length; i++) {
        if (games[i].released >= 2007) {
          newGames.push(games[i]);
          }
      }
console.log(newGames);
      //I use .splice() to remove two elemts out of the array. I only want to show three games.
      newGames.pop();
      newGames.pop();
      console.log(newGames);
      renderGames2(newGames);

      return newGames;

}















// import { apiUrl } from "../constants";

// const detailsContainer = document.querySelector(".newscontainer");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");
// console.log(id);


// const urlDetails = "https://api.noroff.dev/api/v1/gamehub/" + id;

// export async function renderNews() {
//     const response = await fetch(urlDetails);
//     console.log(response);
//     const details = await response.json();

//     createHtml(details);
// }

// renderNews();

// function createHtml(details) {
//     detailsContainer.innerHTML = `
//                         <h3>${details.title}</h3>
//                         <img class="details-img" src="${details.image}" alt="${details.title}"</img>
//                         `;

// document.title =`${details.title}`

// }
