export async function homePage() {

    const homeContainer = document.querySelector(".results-home");

    homeContainer.innerHTML =   `
<div><img src="/images/gamer.jpg" alt="gamer in front of a computer"></img></div>
<br>
<div><button class="productsbutton" onclick="window.location.href ='./products/'">Visit our products</button></div>
                                `;
} 
