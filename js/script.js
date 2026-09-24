//Name Field
//referencing name ID
const name = document.getElementById('name');
//adding a focus state to the name element
name.focus()


//Job Role Section
//referencing job role element
const title = document.getElementById('title');
//referencing other job role element
const otherJobRole = document.getElementById('other-job-role');
//hide this element by default
otherJobRole.style.display = 'none';
//listening for change event on element
title.addEventListener('change', e => {
//access the event
const targetValue = e.target.value
//if 'other' is chosen for the event
if (targetValue === 'other') {
    //display the other field
    otherJobRole.style.display = 'inline-block';
} else {
    //otherwise keep it hidden
    otherJobRole.style.display = 'none';
    }
});    

//T-Shirt Info Section
//referencing Design element
const design = document.getElementById('design');
//referencing Color element
const color = document.getElementById('color');
//referencing the children property of Color
const colorOptions = color.children
//disable its property to true
color.disabled = true;
//listen for change event on the element
design.addEventListener('change', e => {
    //enable its property to false
    color.disabled = false;
    //loop over Color option elements
    for (let i = 0; i < colorOptions.length;i++) {
        //accessing the event
        const eventValue = e.target.value;
        //storing the current color's data type
        const colorData = colorOptions[i].getAttribute('data-theme');
        //if the event and the current color are the same
        if (eventValue === colorData) {
            //show its color options
            colorOptions[i].hidden = false;
            colorOptions[i].selected = true;
        } else {
            //otherwise hide its color options
            colorOptions[i].hidden = true;
            colorOptions[i].selected = false;
        }
    }
})

//Register for Activities Section
//referencing the 'register for activities' fieldset
const activities = document.getElementById("activities");
//referencing the total element
const total = document.getElementById('activities-cost');
//storing the calculated total cost of the activities
let calculatedTotal = 0;
//listen for change on the activities element
activities.addEventListener('change', e => {
    //reference the data-cost attribute of the event and convert it to a number from a string
    const dataCost = parseInt(e.target.getAttribute('data-cost'), 10);
    //check if the event has been checked
    if (e.target.checked) {
        //add the event's cost to the calculated total
        calculatedTotal += dataCost
    } else {
        //otherwise subtract the event's cost from the calculated total
        calculatedTotal -= dataCost
    }
    //update the innerHTMl total withthe new total cost
    total.innerHTML = `Total: $${calculatedTotal}`;

})

//Payment Info Section
//referencing the payment options element
const paymentOptions = document.getElementById("payment");
//referencing the credit card element
const creditCard = document.getElementById("credit-card");
//referencing the paypal element
const payPal = document.getElementById("paypal");
//keep it hidden
payPal.style.display = 'none';
//referencing the bitcoin element
const bitcoin = document.getElementById("bitcoin");
//keep it hidden
bitcoin.style.display = 'none';
//setting credit card as default option
paymentOptions.children[1].setAttribute("selected", "");
//setting up an event listener on the change event
payment.addEventListener('change', e => {
    //hide the payment options
    creditCard.style.display = 'none';
    payPal.style.display = 'none';
    bitcoin.style.display = 'none';
    //the event element
    const selectedPayment = document.getElementById(e.target.value);
        // display the element that matches
    selectedPayment.style.display = 'block';
})

//Form Validation
//reference email element
const email = document.getElementById('email');
//reference credit card number element
const cardNumber = document.getElementById('cc-num');
//reference zipcode element
const zipCode = document.getElementById('zip');
//reference the CVV
const cvv = document.getElementById('cvv');
//reference the entire form
const form = document.querySelector('form');
//setting up an event listener on the submit event
form.addEventListener('submit', e => {
    //NAME
    //reference the Name field element
    const nameField = name.value;
    //test the name value against regex pattern
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameField);
    //if the test results are valid
    if (!nameIsValid) {
        // prevent the form from submitting
        e.preventDefault();
    } 
    //EMAIL
    //reference the email element
    const emailField = email.value;
    //test the email value against regex pattern
    const emailIsValid = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailField);
    //if the test results are valid
    if (!emailIsValid) {
        // prevent the form from submitting
        e.preventDefault();
    }
    //ACTIVITIES
    //select the checkbox inputs inside of activities
    const activityCheckboxes = activities.querySelectorAll('input[type="checkbox"]');
    //boolean flag to keep track if user has selected at least one activity
    let activitiesIsValid = false;
    //loop over the checked boxes
    for (let i = 0; i < activityCheckboxes.length;i++) {
        //if any boxes are checked
        if (activityCheckboxes[i].checked) {
            //update the flag to true
            activitiesIsValid = true;
        }
        //if there are no checked boxes
        if (!activitiesIsValid) {
            // prevent the form from submitting
            e.preventDefault();
        }
    }
    //CREDITCARDS
    //check if the user actually chose creditcard
    if (payment.value === 'credit-card') {
        //validate cardNumber
        const cardNumberField = cardNumber.value;
        const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberField);
        //if cardNumberIsValid is not valid
        if(!cardNumberIsValid){
            //prevent the form from submitting
            e.preventDefault();
        }

        //validate zipcode
        const zipCodeField = zipCode.value;
        const zipCodeIsValid = /^\d{5}$/.test(zipCodeField);
        //if zipCodeIsValid is not valid
        if(!zipCodeIsValid) {
            //prevent the form from submitting
            e.preventDefault();
        }

        //validate cvv
        const cvvField = cvv.value;
        const cvvIsValid = /^\d{3}$/.test(cvvField);
        //if cvvIsValid is not valid
        if(!cvvIsValid) {
            //prevent the form from submitting
            e.preventDefault();
        }

    }
})