import { gamePage } from "./pages/product.js";
import { gamesPage } from "./pages/products.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";
import { homePage } from "./pages/homepage.js";
import { renderNews } from "./pages/news.js";

// import { message } from "./message.js";


console.log(location.pathname);

// if (location.pathname === "/products/") {
//     gamesPage()
// }

// if (location.pathname === "/product/") {
//     gamePage()
// }

// if (location.pathname === "/about/") {
//     aboutPage()
// }

// if (location.pathname === "/contact/") {
//     contactPage()
// }

// if (location.pathname === "/index") {
//     homePage()
// }

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
    case "/contact/":
        contactPage();
        break;
        default:
        homePage();
        renderNews();
        break;
}
