const resultsContainer = document.querySelector(".results");

const url = "https://api.noroff.dev/api/v1/gamehub/";


async function getProducts() {
   try {
    const response = await fetch(url);

    const results = await response.json();
    console.log(results);
    //for loop
    //function (games) -> is a logic name for the "results".
    results.forEach(function (games) {
        resultsContainer.innerHTML += `<a href="product.html?id=${games}" class="results">
                                        <img class="product" src="${games.image}" alt="${games.title}"</img>
                                        <h3>${games.title}</h3>
                                        <p>${games.price}</p>
                                    </a>`
    })
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
};

getProducts();

