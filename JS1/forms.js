window.addEventListener("load", e => {
    // Get references to the form elements
    let quantfield = document.getElementById("firstname");
    let quotefield = document.getElementById("surname");
    let theform = document.getElementById("theform");
    let btnsubmit = document.getElementById("input-button");
  

    // Define custom validation messages for each form element
    let validitychecks = {
        "firstname": "Enter upper or lower case letters",
        "zip": "This field must be a valid NOR ZIP Code",
        "confmail": "This field must be a valid email address"
    };

    updateamount(quantfield.valueAsNumber * parseFloat(quotefield.textContent));

    quantfield.addEventListener("input", e => {
        updateamount(quantfield.valueAsNumber * parseFloat(quotefield.textContent));
    });

    btnreset.addEventListener("click", evt => {
        theform.reset();
        evt.preventDefault();
    })

    // TODO: Given a form field, run a custom check to see if the content is valid
    // and set the custom message if it is not
    function checkFieldValid(field) {
        // remove any old custom error message that was there before
        field.setCustomValidity("");

        let isvalid = field.checkValidity();

        if (!isvalid)
            field.setCustomValidity(validitychecks[field.id]);
    }

    // Check the validity of each form element
    function runFieldChecks() {
        ["ticker", "confmail", "zip"].forEach(elem => {
            let field = document.getElementById(elem);
            checkFieldValid(field);
        });
    }

    // Check all the fields in the form when the user clicks Submit
    btnsubmit.addEventListener("click", evt => {
        if (theform.checkValidity() === false) {
            runFieldChecks();
        }
    });

    // TODO: set up change listeners to validate each element 
    // when the value changes
    ["ticker", "confmail", "zip"].forEach(elem => {
        document.getElementById(elem).addEventListener("change", evt => {
            checkFieldValid(evt.srcElement);
        });
    });
});
