export async function homePage() {

    const homeContainer = document.querySelector(".results-home");

    homeContainer.innerHTML =   `
<img src="/images/logo.png" alt="logo"></img>

<button class="productsbutton" onclick="window.location.href ='./products/'">Visit our products</button>
                                `;
} 
