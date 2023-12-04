const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phone");

function firstNameValidator() {
    if (checkLength(firstName.value, 1) === true) {
      firstNameError.style.display = "none";
      return true;
    } else {
      firstNameError.style.display = "block";
      return false;
    }
  }
  
  function lastNameValidator() {
    if (checkLength(lastName.value, 3) === true) {
      lastNameError.style.display = "none";
      return true;
    } else {
      lastNameError.style.display = "block";
      return false;
    }
  }
  
  function phoneNumberValidator() {
    if (checkLength(phone.value, 7) === true) {
      phoneError.style.display = "none";
      return true;
    } else {
      phoneError.style.display = "block";
      return false;
    }
  }
  
  function emailValidator() {
    if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
      return true;
    } else {
      emailError.style.display = "block";
      return false;
    }
  }
  
  // export function formValidator(event) {
  //   if (
  //     !firstNameValidator() ||
  //     !lastNameValidator() ||
  //     !phoneNumberValidator() ||
  //     !emailValidator()
  //   ) {
  //     event.preventDefault();
  //   }
  // }

export function formValidator(event) {
    const firstName = firstNameValidator(); 
    const lastName = lastNameValidator(); 
    const phoneNumber = phoneNumberValidator(); 
    const email = emailValidator(); 

    if (!firstName || !lastName || !phoneNumber || !email){
        event.preventDefault(); 
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
    console.log(typeof patternMatches);
    return patternMatches;
}

// export function validateForm(event) {
//     event.preventDefault();

//     if (checkFirstName(firstName.value) === true) {
//         firstNameError.style.display = "none";
//         console.log("first name works");
//     } else {
//         firstNameError.style.display = "block";
//     }

//     if (checkLastName(lastName.value) === true) {
//         lastNameError.style.display = "none";
//         console.log("last name works");
//     } else {
//         lastNameError.style.display = "block";
//     }

//     if (checkPhone(phone.value) === true) {
//         phoneError.style.display = "none";
//         console.log("phone number works");
//     } else {
//         phoneError.style.display = "block";
//     }
    
//     if (validateEmail(email.value) === true) {
//         emailError.style.display = "none";
//         console.log("email works");
//     } else {
//         emailError.style.display = "block";
//     }

    
// }

// function checkFirstName(firstName) {
//     // Check if first name contains only letters and has a minimum length of 1
//     const regEx = /^[a-zA-Z]+$/;
//     return regEx.test(firstName) && firstName.length >= 1;
// }

// function checkLastName(lastName) {
//     // Check if last name contains only letters and has a minimum length of 3
//     const regEx = /^[a-zA-Z]+$/;
//     return regEx.test(lastName) && lastName.length >= 3;
// }

// function checkPhone(phone) {
//     // Check if phone number contains only numbers and has a minimum length of 7
//     const regEx = /^\d+$/;
//     return regEx.test(phone) && phone.length > 7;
// }



