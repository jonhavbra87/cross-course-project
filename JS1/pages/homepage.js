export async function homePage() {

    const homeContainer = document.querySelector(".results-home");

    // homeContainer.innerHTML = "";

    homeContainer.innerHTML =   `
<img src="/images/logo.png" alt="logo"></img>

<button class="productsbutton" onclick="window.location.href ='./products/'">Visit our products</button>
                                `;
} 











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

