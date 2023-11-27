import { gamePage } from "./pages/product.js";
import { gamesPage } from "./pages/products.js";
// import { oldGamesPage } from "./pages/oldProducts.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";
import { homePage } from "./pages/homepage.js";
import { renderNews } from "./pages/news.js";
// import { updateamount } from "./forms.js";
// import * `./cart.js`;


switch(location.pathname) {
    case "/products/":
        gamesPage();
        break;
    case "/product/":
        gamePage();
        break;
    // case "/oldProducts/":
    //     getOldGames();
    //     break;
    case "/about/":
        aboutPage();
        break;
     case "/checkout/":
        // updateamount();
        break;
    // case "/cart/"
    //     break;
    case "/contact/":
        contactPage();
        break;
        default:
        homePage();
        renderNews();
        break;
}


