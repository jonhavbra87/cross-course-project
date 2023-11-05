import { gamePage } from "./pages/product.js";
import { gamesPage } from "./pages/products.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";
import { getNewReleases } from "./pages/homepage.js";

// import { renderNews } from "./pages/homepage.js";
// import { message } from "./message.js";

console.log(location.pathname);

if (location.pathname === "/products/") {
    gamesPage()
}

if (location.pathname === "/product/") {
    gamePage()
}

if (location.pathname === "/about/") {
    aboutPage()
}

if (location.pathname === "/contact/") {
    contactPage()
}

if (location.pathname === "/JS1/") {
    getNewReleases()
}

