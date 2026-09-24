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
        console.log(eventValue)
        console.log(colorData)
    }
})
