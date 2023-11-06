export async function contactPage() {
    const contactContainer = document.querySelector(".results-contact");

    if (contactContainer) {
        contactContainer.innerHTML = `
        <img src="/images/call-senter.png" alt="Pcture of a headset with desktop lightning">
        <p>If you have any questions, comments, or concerns about Game Hub or your order,  we're here to help! You can contact us using the contact form below.</p>
        <form class="fieldset-container" action="form-success.php" method="GET">
          <fieldset>
            <legend>Contact Form</legend>
            <label for="name">Your name</label>
            <input type="text" name="name" id="name" class="form__input">
            <label for="phone">Your phone number</label>
            <input type="tel" name="phone" id="phone" class="form__input">
            <label for="email">Your email adress</label>
            <input type="text" name="email" id="email" class="form__input">
            <p>Select your gender</p>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="undisclosed" name="gender" value="undisclosed">
            <label for="undisclosed">Undisclosed</label>
          </fieldset>
          <input class="button" type="submit" value="Send">
        </form>
        <img src="/images/contac-person.png" alt="Person who sits in front of a laptop answears customer emails">
        <p>Our customer support team is available to answer your emails 24/7. We typically respond to emails within 24 hours.</p>
        <p>We pride ourselves on providing exceptional customer service, so please don't hesitate to contact
          us if you have any questions or concerns. We're here to help you get the most out of your gaming experience!</p>
                                        `;
} else {
    console.error('aboutContainer not found in the HTML');
}
}





//document.title =`${details.title}`


//HUSK! ha med tittel på siden