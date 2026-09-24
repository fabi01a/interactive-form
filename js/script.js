//NAME FIELD
const name = document.getElementById('name');
name.focus()

//JOB ROLE SECTION
const title = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
//hide this element by default
otherJobRole.style.display = 'none';

title.addEventListener('change', e => {
    const targetValue = e.target.value
    if (targetValue === 'other') {
        otherJobRole.style.display = 'inline-block';
    } else {
        otherJobRole.style.display = 'none';
    }
});    

//T-SHIRT INFO SECTION
const design = document.getElementById('design');
const color = document.getElementById('color');
//referencing the children property of Color
const colorOptions = color.children

color.disabled = true;
design.addEventListener('change', e => {
    color.disabled = false;
    for (let i = 0; i < colorOptions.length;i++) {
        const eventValue = e.target.value;
        const colorData = colorOptions[i].getAttribute('data-theme');
        if (eventValue === colorData) {
            colorOptions[i].hidden = false;
            colorOptions[i].selected = true;
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].selected = false;
        }
    }
})

//REGISTER FOR ACTIVITIES SECTION
const activities = document.getElementById("activities");
const total = document.getElementById('activities-cost');
let calculatedTotal = 0;

activities.addEventListener('change', e => {
    const dataCost = parseInt(e.target.getAttribute('data-cost'), 10);
    
    if (e.target.checked) {
        calculatedTotal += dataCost
    } else {
        calculatedTotal -= dataCost
    }
    total.innerHTML = `Total: $${calculatedTotal}`;

})

//PAYMENT INFO SECTION
const paymentOptions = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");

const payPal = document.getElementById("paypal");
payPal.style.display = 'none';

const bitcoin = document.getElementById("bitcoin");
bitcoin.style.display = 'none';

paymentOptions.children[1].setAttribute("selected", "");
paymentOptions.addEventListener('change', e => {
    creditCard.style.display = 'none';
    payPal.style.display = 'none';
    bitcoin.style.display = 'none';
    
    const selectedPayment = document.getElementById(e.target.value);
    selectedPayment.style.display = 'block';
})

//FORM VALIDATION
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

//NAME
//creating a helper function to test regex pattern
function nameValidator() {
    const nameField = name.value;
    return  /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameField);
}

//EMAIL
//creating a helper function to test regex pattern
function emailValidator() {
    const emailField = email.value;
    return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailField);
}

//ACTIVITIES
//creating a helper function to test checkbox activity
function activitiesValidator() {
    const activityCheckboxes = activities.querySelectorAll('input[type="checkbox"]');
    let activitiesIsValid = false;
    for (let i = 0; i < activityCheckboxes.length;i++) {
        if (activityCheckboxes[i].checked) {
            activitiesIsValid = true;
        }
    }
    return activitiesIsValid;
}


//CREDITCARDS
function cardNumberValidator() {
    const cardNumberField = cardNumber.value;
    return /^\d{13,16}$/.test(cardNumberField);
}

//VALIDATE ZIPCODE
function zipCodeValidator() {
    const zipCodeField = zipCode.value;
    return zipCodeIsValid = /^\d{5}$/.test(zipCodeField);
}

//VALIDATE CVV
function cvvValidator() {
    const cvvField = cvv.value;
    return cvvIsValid = /^\d{3}$/.test(cvvField);
}

//FORM SUBMIT
form.addEventListener('submit', e => {
    //NAME
    if (!nameValidator()) {
        e.preventDefault();
    }
    //EMAIL
    if (!emailValidator()) {
        e.preventDefault
    }
    //ACTIVIITES
    if(!activitiesValidator()) {
        e.preventDefault
    }
    if (paymentOptions.value === 'credit-card') {
        if (!cardNumberValidator()) {
            e.preventDefault();
        }
        if (!zipCodeValidator()) {
            e.preventDefault();
        }
        if (!cvvValidator()) {
            e.preventDefault();
        }
    }
});
