import { gamePage } from "./pages/product.js";
import { gamesPage } from "./pages/products.js";
import { aboutPage } from "./pages/about.js";
import { homePage } from "./pages/homepage.js";
import { buyGame } from "./pages/buygame.js";
import { renderNews } from "./pages/news.js";
import { formValidator } from "./forms.js";
// import * `./cart.js`;


switch(location.pathname) {
    case "/products/":
        gamesPage();
        break;
    case "/product/":
        gamePage();
        break;
    case "/about/":
        aboutPage();
        break;

    // case "/cart/"
    //     break;
    case "/contact/":
        const form = document.querySelector("#contactForm");
        form.addEventListener("submit", formValidator);
        break;
    case "/checkout/":
            buyGame();
            break;
    case "/index.html":
    case "/":
        homePage();
        renderNews();
        break;
    default:
}


