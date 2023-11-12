export async function aboutPage() {
    const aboutContainer = document.querySelector(".text-container");

    if (aboutContainer) {
        aboutContainer.innerHTML = `
        <img src="/images/origin-story.png" alt="Techguy"></img>
    <p class="infotext">Game Hub Corporation was founded in 2005 by a group of avid gamers who saw an opportunity to create a better online gaming retail experience. Frustrated with the limited selection and poor customer service offered by existing online retailers, the founders of Game Hub set out to create a platform that would offer a wider selection of games, better prices, and exceptional customer service.</p>
    <p class="infotext">In the early days, Game Hub operated out of a small office in Kongsvinger, not far from Oslo, with just a handful of employees working to build the company's website and establish relationships with game developers and publishers. Despite the challenges of launching a new business in a competitive market, the team was passionate about their mission and worked tirelessly to build a platform that would meet the needs of gamers around the world.</p>
    <p class="infotext">Over the years, Game Hub continued to grow and expand, adding new products, services, and features to its platform. In 2010, the company launched its mobile app, allowing customers to browse and purchase games on the go. In 2015, Game Hub introduced its pre-order program, giving customers the ability to reserve their copies of upcoming games before they were even released. Today, Game Hub is one of the most popular online gaming retailers in the world, with a vast selection of games and gaming accessories available for purchase. Despite its success, the company remains true to its founding principles, providing exceptional customer service and a user-friendly platform that makes it easy for gamers to find and purchase the games they love.</p>

                                        `;
} else {
    //This console log is for developers:
    console.error('text-container not found in the HTML');
}
}
