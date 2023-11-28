const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");



export function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
        console.log("first name works");
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
        console.log("last name works");
    } else {
        lastNameError.style.display = "block";
    }

    if (checkLength(phone.value, 7) === true) {
        phoneError.style.display = "none";
        console.log("phone number works");
    } else {
        phoneError.style.display = "block";
    }
    
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        console.log("email works");
    } else {
        emailError.style.display = "block";
    }

    
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}