import { gamePage } from "./pages/product.js";
import { gamesPage } from "./pages/products.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";
import { homePage } from "./pages/homepage.js";
import { renderNews } from "./pages/news.js";
/* import { nameVerify, nameVerify } from "./forms.js"; */



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
/*     case "/checkout/":
        Validate();
        nameVerify();
        break; */
    case "/contact/":
        contactPage();
        break;
        default:
        homePage();
        renderNews();
        break;
}