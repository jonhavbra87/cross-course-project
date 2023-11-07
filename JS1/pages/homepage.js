export async function homePage() {

    const homeContainer = document.querySelector(".results");

    // homeContainer.innerHTML = "";

    homeContainer.innerHTML =   `
<img src="/images/logo.png" alt="logo"></img>

<button class="productsbutton" onclick="window.location.href ='./products/'">Visit our products</button>
                                `;
} 











// import { getGames } from "../api/getProducts.js";
// import { renderGames } from "../render/products.js";


//     const newsContainer = document.querySelector(".results");


// export async function renderNews(){
//     // const games = await getGames();

    
//     let newGames = [];

//     for (let i = 0; i < games.length; i++) {
//         if (games[i].released >= 2007) {
//           newGames.push(games[i]);
//           }
//       }

//       //I use .splice() to remove two elemts out of the array. I only want to show three games.
//       newGames.splice(3);
//       //console.log(newGames);
//       renderGames(newGames);

//       return newGames;

// }


// renderNews()




    // let newProducts = getGames;
    // newsContainer.innerHTML = "";

    // newProducts.forEach(function(games) {
    //     newsContainer.innerHTML += `
    //                                 <div class="p">
    //                                 <h3>${games.released}</h3>
    //                                 </div>
    //                                 `;
    // });
//     console.log(newProduct);

// export function getNewReleases(newProduct) {


//   }

// getNewReleases();








// const newsProduct = document.querySelector(".new-products");

// const url = "https://api.noroff.dev/api/v1/gamehub/";


// export async function renderNews() {
//    try {
//     const response = await fetch(url);

//     const results = await response.json();
//     console.log(results);
//     newsProduct.innerHTML = "";
//     //function (games) -> is a logic name for the "results".
//     newsProduct.forEach(function (games) {
//         newsProduct.innerHTML += ` 
//                                         <a href="product.html?id=${games.id}" class="results">
//                                         <img class="product" src="${games.image}" alt="${games.title}"</img>
//                                         <h3>${games.title}</h3>
//                                         <p>${games.price}</p>
//                                     </a>`

//     });
//     } catch (error) {
//         console.log(error);
//         resultsContainer.innerHTML = message("error", error);
//     }
// };

// renderNews();

