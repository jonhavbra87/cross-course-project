export async function contactPage() {
    const contactContainer = document.querySelector(".results");

    if (contactContainer) {
        contactContainer.innerHTML = `
        <img src="/images/call-senter.png" alt="Pcture of a headset with desktop lightning">
        <p class="infotext">If you have any questions, comments, or concerns about Game Hub or your order,  we're here to help! You can contact us using the contact form below.</p>
        <form action="form-success.php" method="GET">
          <fieldset>
            <legend>Contact Form</legend>
            <label for="name">Your name</label>
            <input type="text" name="name" id="name" class="form__input">
            <label for="phone">Your phone number</label>
            <input type="tel" name="phone" id="phone" class="form__input">
            <label for="email">Your email adress</label>
            <input type="text" name="email" id="email" class="form__input">
            <p>Do you want us to give you a call?</p>
            <div class="yesno"><input type="radio" id="answear-yes" name="call-option">
            <label for="answear-yes">Yes</label>
            <input type="radio" id="answear-no" name="call-option">
            <label for="answear-no">No</label></div>
          </fieldset>
          <input class="input-button" type="submit" value="SEND">
        </form>
        <img src="/images/contac-person.png" alt="Person who sits in front of a laptop answears customer emails">
        <p class="infotext">Our customer support team is available to answer your emails 24/7. We typically respond to emails within 24 hours. We pride ourselves on providing exceptional customer service, so please don't hesitate to contact
          us if you have any questions or concerns. We're here to help you get the most out of your gaming experience!</p>
                                        `;
} else {
    console.error('aboutContainer not found in the HTML');
}
}





//document.title =`${details.title}`


//HUSK! ha med tittel på siden