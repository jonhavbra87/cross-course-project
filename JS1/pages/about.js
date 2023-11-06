export async function aboutPage() {
    const aboutContainer = document.querySelector(".results-about");

    if (aboutContainer) {
        aboutContainer.innerHTML = `
        <img src="/images/origin-story.png" alt="Techguy"></img>
    <p>Game Hub Corporation was founded in 2005 by a group of avid gamers who saw an opportunity to create a better online gaming retail experience. Frustrated with the limited selection and poor customer service offered
    by existing online retailers, the founders of Game Hub set out to create a platform that would offer a wider selection of games, better prices, and exceptional customer service.</p>
                                        `;
} else {
    console.error('aboutContainer not found in the HTML');
}
}




//document.title =`${details.title}`


//HUSK! ha med tittel på siden