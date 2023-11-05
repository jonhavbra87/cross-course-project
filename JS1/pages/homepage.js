const newReleases = document.querySelector(".new-products");


export function getNewReleases(titles) {

    let newProduct = [];
    
    console.log(newProduct);

    for (let i = 0; i < title.length; i++) {
      if (title[i].released >= 2007) {
        newProduct.push(title[i]);
        }
    }
    //Five is one too many, we need 4, so we remove the first one as this one repeats in the Trending now section.
    // newReleases.shift();
    return newProduct;
  }

getNewReleases(titles);








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

